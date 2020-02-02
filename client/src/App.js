import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Main from './components/Main'
import PersonA from './components/persons/PersonA'
import PersonB from './components/persons/PersonB'
import PersonC from './components/persons/PersonC'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "./App.css";
import Navbar from "./components/Navbar.jsx";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null,
    forwarded_msg:''
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // runExample = async () => {
  //   const {  accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[1] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };


  forward = (msg) =>{
    console.log(msg);
    
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }



    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Eth App</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        {/* <div>The stored value is: {this.state.storageValue}</div> */}
        <button className="button-narrow">App</button>
        


      <BrowserRouter>
        <Switch>
          {/* <Route path='/home' component={Main}/> */}
          <Route exact path='/personA' component={PersonA}/>
          <Route exact path='/personB' component={PersonB}/>
          <Route exact path='/personC' component={PersonC}/>
        </Switch>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
