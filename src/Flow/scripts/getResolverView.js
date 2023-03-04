export const getUserNFTs = `
import NPMContract from 0x3614f2c88992e88b
import MetadataViews from 0x631e88ae7f1d7c20

pub fun main(id: UInt64, account: Address) : &AnyResource{MetadataViews.Resolver} {
    let account1 = getAccount(account)
    let acct1Capability =  account1.getCapability(NPMContract.CollectionPublicPath)
                            .borrow<&{NPMContract.NPMContractCollectionPublic}>()
                            ??panic("could not borrow receiver reference ")

    return acct1Capability.borrowViewResolver(id: id)
}`;
