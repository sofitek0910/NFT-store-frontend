export const getAllListedNFTsByUser = `
import NFTMarketplace from 0x3614f2c88992e88b

pub fun main(user: Address) : {UInt64: NFTMarketplace.ListingItemPublic} {
    return NFTMarketplace.getAllListingNMPsByUser(user: user)
}`;
