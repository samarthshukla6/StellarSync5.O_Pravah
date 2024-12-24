import React, { useState } from "react";
import { ethers } from "ethers";

const MetaMaskDemo = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState("");

  // Function to connect MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // Request access to MetaMask
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);

        // Get ETH balance
        const balanceInWei = await provider.getBalance(userAddress);
        setBalance(ethers.utils.formatEther(balanceInWei));
        alert("Wallet connected successfully!");
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        alert("Failed to connect wallet. Please try again.");
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
    }
  };

  // Function to send ETH
  const sendTransaction = async () => {
    if (!account) {
      alert("Please connect your wallet first!");
      return;
    }
    if (!ethers.utils.isAddress(receiver)) {
      alert("Please enter a valid Ethereum address.");
      return;
    }
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount in ETH.");
      return;
    }
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const tx = await signer.sendTransaction({
        to: receiver, // Receiver's Ethereum address
        value: ethers.utils.parseEther(amount), // Amount to send in ETH
      });

      alert("Transaction sent successfully! Hash: " + tx.hash);
    } catch (error) {
      console.error("Error sending transaction:", error);
      alert("Failed to send transaction. Please try again.");
    }
  };

  return (
    <div className="p-4 text-center bg-gray-900 text-white rounded-lg" style={{ minHeight: "100vh", padding: "2rem" }}>
      <h1 className="text-2xl font-bold mb-4">MetaMask Demo</h1>
      {!account ? (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Connect MetaMask
        </button>
      ) : (
        <div>
          <p className="mb-2">Connected Account: {account}</p>
          <p className="mb-4">Balance: {balance} ETH</p>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Receiver's Address"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              className="p-2 border rounded text-black w-full mb-2"
              style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
            />
            <input
              type="text"
              placeholder="Amount in ETH"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 border rounded text-black w-full mb-4"
              style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
            />
            <button
              onClick={sendTransaction}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 w-full"
              style={{ padding: "10px 20px", cursor: "pointer" }}
            >
              Send ETH
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetaMaskDemo;
