import * as fcl from "@onflow/fcl";

fcl
  .config()
  .put("accessNode.api", "https://rest-testnet.onflow.org")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
  .put("0xProfile", "0x3614f2c88992e88b")
  .put("app.detail.title", "Nporium")
  .put(
    "app.detail.icon",
    "https://nft-store-frontend-nine.vercel.app/images/npm-logo.png"
  );
