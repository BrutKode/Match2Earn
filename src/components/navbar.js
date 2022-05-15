import React, { Component } from 'react';
import profile from './images/profile.png';
import './css/navbar.css';
import Web3 from 'web3';

export class Navbar extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }
  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      token: null,
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Brut Kode</span>
            <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" href="#about" src={profile} alt="Logo" /></span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://brutkode.eth.link">About Me</a></li>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Connected Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li className="dropdown-item"><a href="#game">{ this.state.account }</a></li>
                </ul>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
