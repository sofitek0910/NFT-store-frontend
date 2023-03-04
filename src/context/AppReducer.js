export const HANDLE_LOG_IN = "HANDLE_LOG_IN";
export const HANDLE_LOG_OUT = "HANDLE_LOG_OUT";
export const HANDLE_Wallet_LOG_IN = "HANDLE_Wallet_LOG_IN";
export const HANDLE_Wallet_LOG_OUT = "HANDLE_Wallet_LOG_OUT";

const AppReducer = (state, action) => {
  const { type, username, role, useraddress, userQR, balance, fiatbalance } =
    action;
  switch (type) {
    case HANDLE_LOG_IN:
      return {
        ...state,
        logged: true,
        userName: username,
        role: role,
      };
    case HANDLE_LOG_OUT:
      return {
        ...state,
        logged: false,
        userName: "",
        role: 0,
      };
    case HANDLE_Wallet_LOG_IN:
      return {
        ...state,
        useraddress: useraddress,
        userQR: userQR,
        balance: balance,
        fiatbalance: fiatbalance,
      };
    case HANDLE_Wallet_LOG_OUT:
      return {
        ...state,
        useraddress: "",
        userQR: "",
        balance: null,
        fiatbalance: null,
      };

    default:
      return state;
  }
};

export default AppReducer;
