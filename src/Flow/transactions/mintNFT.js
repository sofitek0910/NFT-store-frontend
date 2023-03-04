export const mintNFT = `
import NPMContract from 0x3614f2c88992e88b

transaction(resourceOwner: Address, name: String, description: String, media: String, data: {String: String}?, recipientAddress: Address) {
    prepare(acct: AuthAccount) {
        let account = getAccount(resourceOwner)
        let adminRef = account.getCapability(NPMContract.NFTAdminResourcePublicPath)
            .borrow<&{NPMContract.NFTAdminResourcePublic}>()
            ?? panic("Could not borrow public sale reference")
        adminRef.mintToken(name: name, description: description, media: media, data: data, recipientAddress: recipientAddress)
    }
}`;
