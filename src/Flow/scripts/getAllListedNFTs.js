export const getAllListedNFTs = `
import NFTMarketplace from 0x3614f2c88992e88b

pub fun main() : {Address: {UInt64: NFTMarketplace.ListingItemPublic}} {
    return NFTMarketplace.getAllListingNMPs()x
}`;
