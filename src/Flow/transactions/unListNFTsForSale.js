export const unListNFTsForSale = `
import NonFungibleToken from 0x631e88ae7f1d7c20
import NPMContract from 0x3614f2c88992e88b
import FungibleToken from 0x9a0766d93b6608b7
import FlowToken from 0x7e60df042a9c0868
import NFTMarketplace from 0x3614f2c88992e88b

transaction(tokenID:UInt64){
    let collectionRef: &NPMContract.Collection
    let NFTMarketplaceSaleCollectionRef: &NFTMarketplace.SaleCollection

    prepare(account:AuthAccount){ 
        let collectionCap = account.getCapability<&{NPMContract.NPMContractCollectionPublic}>(NPMContract.CollectionPublicPath)
        if !collectionCap.check(){
            account.save(<- NPMContract.createEmptyCollection(), to: NPMContract.CollectionStoragePath)
            account.link<&{NPMContract.NPMContractCollectionPublic}>(NPMContract.CollectionPublicPath, target: NPMContract.CollectionStoragePath) 
        }
        self.collectionRef = account.borrow<&NPMContract.Collection>(from: NPMContract.CollectionStoragePath) 
                            ??panic("could not borrow NPMContract collection")
        self.NFTMarketplaceSaleCollectionRef = account.borrow<&NFTMarketplace.SaleCollection>(from: NFTMarketplace.SaleCollectionStoragePath)
                                                ??panic("could not borrow NFTMarketplace collection")
        }
    execute{
        
        let token <- self.NFTMarketplaceSaleCollectionRef.withdraw(tokenID: tokenID)
        self.collectionRef.deposit(token: <- token)
    }
}`;
