export const createEmptyNFTCollection = `
import NonFungibleToken from 0x631e88ae7f1d7c20
import NPMContract from 0x3614f2c88992e88b


transaction() {
    prepare(acct: AuthAccount) {
        acct.save(<- NPMContract.createEmptyCollection(), to: NPMContract.CollectionStoragePath)
        acct.link<&{NPMContract.NPMContractCollectionPublic}>(NPMContract.CollectionPublicPath, target: NPMContract.CollectionStoragePath)
    }
}
`;
