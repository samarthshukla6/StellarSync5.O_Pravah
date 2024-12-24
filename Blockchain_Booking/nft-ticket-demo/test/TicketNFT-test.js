const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TicketNFT", function () {
    it("Should mint and assign a ticket NFT", async function () {
        const [owner, recipient] = await ethers.getSigners();

        const TicketNFT = await ethers.getContractFactory("TicketNFT");
        const ticketNFT = await TicketNFT.deploy();
        await ticketNFT.deployed();

        // Mint an NFT
        const tokenURI = "https://example.com/metadata.json";
        await ticketNFT.mintTicket(recipient.address, tokenURI);

        const tokenOwner = await ticketNFT.ownerOf(0);
        expect(tokenOwner).to.equal(recipient.address);

        const storedTokenURI = await ticketNFT.tokenURI(0);
        expect(storedTokenURI).to.equal(tokenURI);
    });
});
