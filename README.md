
<p align="center">
  <img src="docs/veriflex-logo.svg" alt="SVG Logo" width="200"> <!-- Adjust the width value as needed -->
</p>

# Your Platform to Preserve Private On-chain Identity



Welcome to our platform, a decentralized application designed to help you preserve your private on-chain identity. This project was submitted for the third edition of **Franklin Templeton Blockchain Contest**.

## Work Directories

This project consists of two main directories:

1. `packages/contracts` - This directory contains all the smart contracts that power our platform.
2. `packages/app` - This directory contains the frontend application that allows you to interact with the blockchain.

## Getting Started

To get started with our platform, follow these simple steps:

### 1. Backend Setup

Navigate to the `packages/contracts` directory:

```bash
cd packages/contracts
```

Install needed dependencies:

```bash
npm install
```

Next, start the Hardhat node:

```bash
npx hardhat node
```

This will open a port to listen for incoming transactions. **Do not close this terminal!**

In a new terminal window, deploy the smart contracts:

```bash
npm run deploy
```

Our platform is based on the Ethereum blockchain. To interact with it, you'll need to install [MetaMask](https://metamask.io/) and add the localhost test network to it.

**RPC:**

```bash

Network name: Localhost
RPC URL: http://localhost:8545
Chain ID: 1337
Currency symbol: ETH

```

### 2. Frontend Setup

Navigate to the `packages/app` directory:

```bash
cd packages/app
```

Install needed dependencies:

```bash
npm install
```

Then, start the Next.js application:

```bash
npm run dev
```

### 3. Explore the Platform

Open your browser and navigate to `localhost:3000`.

Connect your wallet using the button at the top of the page.

Now, you're all set to explore the platform and preserve your private on-chain identity!

### Issuer:

Here you can mint your own SBT. This SBT is predefined to prove you are over 18.

### Holder:

After connecting your wallet, you can see there is one SBT by default (it's just a placeholder). After minting your SBT with Issuer, you can see it in this page. To prove and verify it, just click the verify button.

❗ *Note*: If you are experiencing issues when minting or performing any other operation regarding smart contracts - switch network to other and then switch back to localhost. It will restart local state and will sync with hardhat blockchain instance.

### TODO:
Deploy contracts to Sepolia testnet and migrate app into Vercel for easy sharing.

---

*Please note that the local blockchain is for testing purposes only. Always ensure that you're connected to the correct network before making any transactions.*

We hope you enjoy using our platform. If you have any questions or feedback, please don't hesitate to get in touch.

## Happy exploring! 🚀
