export const purchseNPMWithFlow = `
import NonFungibleToken from 0x631e88ae7f1d7c20
import NPMContract from 0x3614f2c88992e88b
import FungibleToken from 0x9a0766d93b6608b7
import FlowToken from 0x7e60df042a9c0868
import NFTMarketplace from 0x3614f2c88992e88b

transaction(sellerAddress: Address, tokenID: UInt64, purchaseAmount: UFix64){
    let collectionCap: Capability<&{NPMContract.NPMContractCollectionPublic}>
    let vaultCap: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
    let temporaryVault: @FungibleToken.Vault
    prepare(account:AuthAccount){
        var collectionCap = account.getCapability<&{NPMContract.NPMContractCollectionPublic}>(NPMContract.CollectionPublicPath)
        if !collectionCap.check() {
            account.save(<- NPMContract.createEmptyCollection(), to: NPMContract.CollectionStoragePath)
            account.link<&{NPMContract.NPMContractCollectionPublic}>(NPMContract.CollectionPublicPath, target: NPMContract.CollectionStoragePath)
        }
        self.collectionCap = collectionCap
        self.vaultCap = account.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)
        let vaultRef = account.borrow<&FlowToken.Vault{FungibleToken.Provider}>(from: /storage/flowTokenVault) 
                        ?? panic("Could not borrow owner''s Vault reference")
        self.temporaryVault <- vaultRef.withdraw(amount: purchaseAmount)
        }
    execute{
         let seller = getAccount(sellerAddress)
        let marketplace = seller.getCapability(NFTMarketplace.SaleCollectionPublicPath)
            .borrow<&{NFTMarketplace.SalePublic}>()
            ?? panic("Could not borrow public sale reference")
        marketplace.purchaseNPMWithFlow(tokenID:tokenID, recipientCap: self.collectionCap, buyTokens: <- self.temporaryVault)
    }
}`;
