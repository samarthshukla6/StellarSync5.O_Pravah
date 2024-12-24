async function main() {
    // Get the account that will deploy the contract
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Get the contract factory for the TicketNFT contract
    const TicketNFT = await hre.ethers.getContractFactory("TicketNFT");
    
    // Deploy the contract
    const ticketNFT = await TicketNFT.deploy();  // This will deploy the contract and give you an instance
  
    // Log the contract address after deployment
    console.log("TicketNFT contract deployed to:", ticketNFT.address);
  
    // Wait for the transaction to be mined
    // await ticketNFT.deployTransaction.wait();
  
    console.log("TicketNFT contract transaction mined!");
  }
  
  // Run the deployment
  main()
    .then(() => process.exit(0))  // Exit successfully
    .catch((error) => {
      console.error(error);  // Print any error that occurs
      process.exit(1);  // Exit with failure
    });
  