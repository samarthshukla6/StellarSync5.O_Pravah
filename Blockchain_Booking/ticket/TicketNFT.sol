// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import OpenZeppelin ERC-721 standard
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TicketNFT is ERC721, Ownable {
    // Variables
    uint256 public nextTokenId; // Token ID counter
    uint256 public ticketPrice; // Price of each ticket in wei
    mapping(uint256 => string) public eventDetails; // Maps tokenId to event details

    // Constructor to initialize the NFT
    constructor(uint256 _ticketPrice) ERC721("EventTicket", "ETKT") {
        ticketPrice = _ticketPrice;
    }

    // Function to mint a new ticket
    function mintTicket(address recipient, string memory _eventDetails) external payable {
        require(msg.value >= ticketPrice, "Insufficient funds to purchase ticket");

        uint256 tokenId = nextTokenId; // Get current token ID
        nextTokenId++; // Increment token ID for the next ticket

        // Mint the NFT to the recipient
        _safeMint(recipient, tokenId);

        // Store event details for the ticket
        eventDetails[tokenId] = _eventDetails;
    }

    // Function to update ticket price (onlyOwner can call this)
    function setTicketPrice(uint256 newPrice) external onlyOwner {
        ticketPrice = newPrice;
    }

    // Function to withdraw contract funds (onlyOwner can call this)
    function withdrawFunds() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Function to fetch ticket details by token ID
    function getTicketDetails(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Ticket does not exist");
        return eventDetails[tokenId];
    }
}
