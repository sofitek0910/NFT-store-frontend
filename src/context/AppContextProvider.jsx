import React, { createContext, useReducer } from "react";

import AppReducer, {
  HANDLE_LOG_IN,
  HANDLE_LOG_OUT,
  HANDLE_Wallet_LOG_IN,
  HANDLE_Wallet_LOG_OUT,
} from "./AppReducer";

var user = localStorage.getItem("name");
var role = localStorage.getItem("role");
var qr = localStorage.getItem("qr");
var address = localStorage.getItem("address");
var userbalance = localStorage.getItem("userbalance");
var userfiatbalance = localStorage.getItem("userfiatbalance");
const initialState =
  user && role
    ? {
        logged: true,
        role: role,
        userName: user,
        useraddress: address,
        userQR: qr,
        balance: userbalance,
        fiatbalance: userfiatbalance,
      }
    : {
        logged: false,
        role: 0,
        userName: "",
        useraddress: "",
        userQR: "",
        balance: null,
        fiatbalance: null,
      };

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleLogin = (user, role) => {
    dispatch({
      type: HANDLE_LOG_IN,
      username: user,
      role: role,
    });
  };

  const handleWalletLogin = (address, qr, userbalance, userfiatbalance) => {
    dispatch({
      type: HANDLE_Wallet_LOG_IN,
      useraddress: address,
      balance: userbalance,
      fiatbalance: userfiatbalance,
      userQR: qr,
    });
  };

  const handleLogout = () => {
    dispatch({ type: HANDLE_LOG_OUT });
  };

  const handleWalletLogout = () => {
    dispatch({ type: HANDLE_Wallet_LOG_OUT });
  };

  const contextValue = {
    ...state,
    handleLogin: handleLogin,
    handleLogout: handleLogout,
    handleWalletLogin: handleWalletLogin,
    handleWalletLogout: handleWalletLogout,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
