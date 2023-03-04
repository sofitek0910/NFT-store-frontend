export const purchseNPM = `
import NonFungibleToken from 0x631e88ae7f1d7c20
import NPMContract from 0x3614f2c88992e88b
import FungibleToken from 0x9a0766d93b6608b7
import FlowToken from 0x7e60df042a9c0868
import NFTMarketplace from 0x3614f2c88992e88b

transaction(sellerAddress: Address, tokenID: UInt64){
    let collectionCap: Capability<&{NPMContract.NPMContractCollectionPublic}>

    prepare(account:AuthAccount){
         // get the references to the buyer''s Vault and NFT Collection receiver
        var collectionCap = account.getCapability<&{NPMContract.NPMContractCollectionPublic}>(NPMContract.CollectionPublicPath)
        // if collection is not created yet we make it.
        if !collectionCap.check() {
            account.save(<- NPMContract.createEmptyCollection(), to: NPMContract.CollectionStoragePath)
            account.link<&{NPMContract.NPMContractCollectionPublic}>(NPMContract.CollectionPublicPath, target: NPMContract.CollectionStoragePath)
        }

        self.collectionCap = collectionCap

        }
    execute{
         let seller = getAccount(sellerAddress)

        // borrow a public reference to the seller's sale collection
        let marketplace = seller.getCapability(NFTMarketplace.SaleCollectionPublicPath)
            .borrow<&{NFTMarketplace.SalePublic}>()
            ?? panic("Could not borrow public sale reference")
        
        marketplace.purchaseNPM(tokenID:tokenID, recipientCap: self.collectionCap)
    }
}`;
