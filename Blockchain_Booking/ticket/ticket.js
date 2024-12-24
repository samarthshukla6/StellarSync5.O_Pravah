
import { ethers } from "ethers";
import TicketNFTABI from "./TicketNFT.json"; // ABI JSON

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const ticketNFT = new ethers.Contract(contractAddress, TicketNFTABI, signer);

// Mint a Ticket
async function mintTicket(eventDetails) {
  const ticketPrice = await ticketNFT.ticketPrice();
  const tx = await ticketNFT.mintTicket(signer.getAddress(), eventDetails, {
    value: ticketPrice,
  });
  await tx.wait();
  console.log("Ticket minted successfully!");
}

// Get Ticket Details
async function getTicketDetails(tokenId) {
  const details = await ticketNFT.getTicketDetails(tokenId);
  console.log("Ticket Details:", details);
}
