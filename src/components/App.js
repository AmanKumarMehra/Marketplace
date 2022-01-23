import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar'
import Main from './Main'


class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  // async loadWeb3() {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum)
  //     await window.ethereum.enable()
  //   }
  //   else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider)
  //   }
  //   else {
  //     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  //   }
  // }

  async loadWeb3() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      return true;
    }else{
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
    //return false;
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    //const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    //const accounts = await window.ethereum.send('eth_requestAccounts');
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const productCount = await marketplace.methods.productCount().call()
      console.log(productCount.toString())
      this.setState({ loading: false})
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      loading: true
    }

    this.createProduct = this.createProduct.bind(this)
  }

  createProduct(name, price) {
    this.setState({ loading: true })
    this.state.marketplace.methods.createProduct(name, price).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }
  
  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
          <main role="main" className="col-lg-12 d-flex">
          { 
          <Main createProduct={this.createProduct} />
          // this.state.loading
          //   ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
          //   : <Main createProduct={this.createProduct} />
          }
          </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;