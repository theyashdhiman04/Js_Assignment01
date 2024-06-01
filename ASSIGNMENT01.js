/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs' metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// Variable to store NFTs
const nftCollection = [];

// Function to mint a new NFT
function mintNFT(name, category, brand, specs, price, releaseYear) {
    const nftMetadata = {
        name: name,
        category: category,
        brand: brand,
        specs: specs,
        price: price,
        releaseYear: releaseYear
    };
    nftCollection.push(nftMetadata);
    console.log(`NFT Minted: ${name}`);
}

// Function to list all NFTs
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`\nNFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Category: ${nft.category}`);
        console.log(`Brand: ${nft.brand}`);
        console.log(`Specs: ${nft.specs}`);
        console.log(`Price: ${nft.price}`);
        console.log(`Release Year: ${nft.releaseYear}`);
    });
}

// Function to get the total supply of NFTs
function getTotalSupply() {
    console.log(`Total NFTs Minted: ${nftCollection.length}`);
}

// Calling the functions to test the implementation
mintNFT("iPhone 13", "Smartphone", "Apple", "128GB, A15 Bionic", "$799", 2021);
mintNFT("Galaxy S21", "Smartphone", "Samsung", "128GB, Exynos 2100", "$699", 2021);
mintNFT("MacBook Pro", "Laptop", "Apple", "M1 Chip, 16GB RAM", "$1299", 2020);
mintNFT("Surface Pro 7", "Tablet", "Microsoft", "Intel i5, 8GB RAM", "$749", 2019);

listNFTs();
getTotalSupply();

