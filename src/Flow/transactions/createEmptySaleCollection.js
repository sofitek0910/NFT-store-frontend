export const createEmptySaleCollection = `
import FungibleToken from 0x9a0766d93b6608b7
import FlowToken from 0x7e60df042a9c0868
import NFTMarketplace from 0x3614f2c88992e88b

transaction() {
    prepare(acct: AuthAccount) {
        let ownerVault = acct.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)
        acct.save(<- NFTMarketplace.createSaleCollection(ownerVault: ownerVault), to: NFTMarketplace.SaleCollectionStoragePath)
        acct.link<&{NFTMarketplace.SalePublic}>(NFTMarketplace.SaleCollectionPublicPath, target: NFTMarketplace.SaleCollectionStoragePath)
    }
}`;
