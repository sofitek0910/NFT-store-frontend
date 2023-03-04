import * as fcl from "@onflow/fcl";

export const Login = async () => {
  return await fcl.authenticate();
};
export const LogOut = async () => {
  return await fcl.unauthenticate();
};
