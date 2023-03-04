import React from "react";

const baseUrl = process.env.REACT_BASE_URL;

export const registerUser = async (
  email,
  firstName,
  lastName,
  imageUrl,
  password
) => {
  let registerData = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    imageUrl: imageUrl,
    password: password,
  };
  let result = await fetch(
    "https://nftmarketbackendapp.herokuapp.com/api/signup",
    {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    return response.json();
  });

  return result;
};

export const loginWithGoogle = async (
  sub,
  name,
  given_name,
  family_name,
  picture,
  email,
  email_verified,
  locale
) => {
  let registerData = {
    sub: sub,
    name: name,
    given_name: given_name,
    family_name: family_name,
    picture: picture,
    email: email,
    email_verified: email_verified,
    locale: locale,
  };
  let result = fetch(
    "https://nftmarketbackendapp.herokuapp.com/api/loginWithGoogle",
    {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    localStorage.setItem("sid", response.headers.get("Session-Id"));

    return response.json();
  });
  return result;
};

export const login = async (email, password) => {
  let loginData = {
    email: email,
    password: password,
  };
  let result = fetch("https://nftmarketbackendapp.herokuapp.com/api/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  }).then((response) => {
    localStorage.setItem("sid", response.headers.get("Session-Id"));
    return response.json();
  });

  return result;
};

export const logout = async (sessionId) => {
  let result = fetch("https://nftmarketbackendapp.herokuapp.com/api/logout", {
    method: "POST",
    headers: {
      sessionId: `${sessionId}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  }).then((response) => {
    return response.json();
  });

  return result;
};

export const updateRoyalityCut = async (amount, sessionId) => {
  let updateRoyaityData = {
    value: amount,
  };
  let result = fetch(
    "https://nftmarketbackendappupdateRoyaityData.herokuapp.com/api/updateRoyalityCut",
    {
      method: "POST",
      body: JSON.stringify(updateRoyaityData),
      headers: {
        sessionId: `${sessionId}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    return response.json();
  });

  return result;
};

export const updateMarketingCut = async (amount, sessionId) => {
  let updateMarketingCutData = {
    value: amount,
  };
  let result = fetch(
    "https://nftmarketbackendapp.herokuapp.com/api/updateMarketingCut",
    {
      method: "POST",
      body: JSON.stringify(updateMarketingCutData),
      headers: {
        sessionId: `${sessionId}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    return response.json();
  });

  return result;
};

export const updatelistNFTPrice = async (amount, nftId, sessionId) => {
  let updatelistNFTPriceData = {
    tokenId: nftId,
    price: amount,
  };
  let result = fetch(
    "https://nftmarketbackendapp.herokuapp.com/api/updatelistNFTPrice",
    {
      method: "POST",
      body: JSON.stringify(updatelistNFTPriceData),
      headers: {
        sessionId: `${sessionId}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    return response.json();
  });

  return result;
};

export const unlistNFTFromSale = async (nftId, sessionId) => {
  let unlistNFTFromSaleData = {
    tokenId: nftId,
  };
  let result = fetch(
    "https://nftmarketbackendapp.herokuapp.com/api/unlistNFTFromSale",
    {
      method: "POST",
      body: JSON.stringify(unlistNFTFromSaleData),
      headers: {
        sessionId: `${sessionId}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    return response.json();
  });

  return result;
};

export const listNFTForSale = async (amount, nftId, sessionId) => {
  let listNFTForSaleData = {
    tokenId: nftId,
    price: amount,
  };
  let result = fetch(
    "https://nftmarketbackendapp.herokuapp.com/api/listNFTForSale",
    {
      method: "POST",
      body: JSON.stringify(listNFTForSaleData),
      headers: {
        sessionId: `${sessionId}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    return response.json();
  });

  return result;
};

export const mintNFT = async (
  name,
  description,
  artist,
  category,
  avatar,
  media,
  artistCollectionImg,
  sessionId
) => {
  let mintData = new FormData();
  mintData.append("name", name);
  mintData.append("description", description);
  mintData.append("artist", artist);
  mintData.append("category", category);
  mintData.append("avatar", avatar);
  mintData.append("artistCollectionAvatar", artistCollectionImg);
  mintData.append("media", media);
  let result = fetch("https://nftmarketbackendapp.herokuapp.com/api/mintNFT", {
    method: "POST",
    body: mintData,
    headers: {
      sessionId: `${sessionId}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  }).then((response) => {
    return response.json();
  });

  return result;
};

export const forgotPassword = async (email) => {
  let forgotData = {
    email: email,
  };
  let result = fetch(
    "https://nftmarketbackendapp.herokuapp.com/api/forgetPassword",
    {
      method: "POST",
      body: JSON.stringify(forgotData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    return response.json();
  });

  return result;
};

export const updateNewPassword = async (password, tokenParam) => {
  let updatePasswordData = {
    password: password,
  };
  let result = fetch(
    `https://nftmarketbackendapp.herokuapp.com/api/updateNewPassword/${tokenParam}`,
    {
      method: "PUT",
      body: JSON.stringify(updatePasswordData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    return response.json();
  });

  return result;
};

export const getAllUsers = async () => {
  const result = await fetch(
    "https://nftmarketbackendapp.herokuapp.com/api/getUserData"
  ).then((response) => {
    return response.json();
  });

  return result;
};

export const checkUserSession = async () => {
  const result = await fetch(
    "https://nftmarketbackendapp.herokuapp.com/api/checkUserSession"
  ).then((response) => {
    return response.json();
  });

  return result;
};
