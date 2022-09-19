

# About the Project

## Marketplace

This Project is built for learning basics of Ethereum blockchain. 
This web3 app provides a platform to buy and sell products on 
Ethereum Blockchain. A person can buy products by paying in Ether 
(Crypto currency on Ethereum) using his Digital wallet Metamask. 

## Frontend
  ![Frontend](https://user-images.githubusercontent.com/77455854/191080570-1a06f1b7-b3b9-4f47-9eb0-2362471c0627.PNG)
  
## Metamask
![transaction](https://user-images.githubusercontent.com/77455854/191080889-257ee33a-7876-47e8-83d1-7cfe6eaf597b.PNG)

## Tools Used

- Truffle Framework - *provides environment to develop Web3 Apps* 
- Mocha Framework - *used for testing of smart contract*
- Remix IDE - *Online IDE for developing smart contract*
- Ganache - *Set up local Blockchain on out desktop*
- Metamask - *Digital wallet for crypto transaction*
- VS Code Editor

![ethereum tools](https://user-images.githubusercontent.com/77455854/191078166-73013559-2dc1-40dc-a83f-1abe73aff65c.jpg)

## Languages Used
- Solidity - *for developing Smart Contracts*
- JavaScript - *for Testing of Smart Contract*

## Libraries Used
- Web3.js Library - *for connecting web app to Ethereum node*
- React.js - *javascript library for frontend development*
- Node.js - *fetching data from blockchain* 
- Chai - *contains helpers for assertions*

# Father of Ethereum Blockchain - *Vitalik Buterin*
https://user-images.githubusercontent.com/77455854/191086059-4e8cbf5b-c3b7-4dfa-adb0-f9ace475acb3.mp4


# Some Truffle commands
* Opens truffle console truffle<development>
```bash
  truffle console 
```

* Print all accounts available on Blockchain(Ganache)
```bash
  account = await web3.eth.getAccounts()
  
  account
```
* Print the current BlockNumber
```bash
  blockNumber = await web3.eth.getBlockNumber()
  
  blockNumber
```

* To Print a copy of our Smart Contract
```bash
  marketplace = await Marketplace.deployed()
  
  marketplace
```

Print address of our Smart Contract
```bash
  marketplace.address
```

# Step by step guide to initiate truffle

* To install react app package
```bash
  npm install create-react-app 
```

* To create a folder of react app
```bash
  npx create-react-app AppName
```

* To run React App
```bash
  npm start
```

* Initiates Truffle in main folder
```bash
  truffle init
```

* To Compile Smart Contract
```bash
  truffle compile
```

* Truffle deploys the contract to a new address that has empty address slots
```bash
  truffle migrate
```

* To run all migrations from the beginning in case of previous failure
```bash
  truffle migrate -- reset
```

Some Configurations
* RPC URL --> http:/127.0.0.1 : 7545 {get it from Genache}
* Chain Id - 1337
* Import account in metamask via private key (from Ganache)
* Install web3
```bash
  npm install web3
```
* In case you face compile error
```bash
  npm install --save react-scripts@4.0.3
```
* to check metamask is installed or not
```bash
  npm install @metamask/detect-provider
```



  
  
