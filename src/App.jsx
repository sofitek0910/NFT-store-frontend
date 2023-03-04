import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { gapi } from "gapi-script";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Layout from "components/Layout";

import Home from "views/Home";
import Explore from "views/Explore";
import Collectibles from "views/Collectibles";
import Collections from "views/Collections";
import CollectionCategory from "views/CollectionCategory";
import CollectionDetail from "views/CollectionDetail";
import Creators from "views/Creators";
import CreatorDetail from "views/CreatorDetail";
import Blog from "views/Blog";
import BlogDetail from "views/BlogDetail";
import Contact from "views/Contact";
import Login from "views/Login";
import Register from "views/Register";
import Profile from "views/Profile";
import Account from "views/Account";
import UpdateUserPasword from "views/UpdateUserPasword";

import AppContextProvider from "context/AppContextProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Forgot from "views/Forgot";
import Terms from "views/Terms";
import AdminDashboard from "views/AdminDashboard";
import ListNftForSale from "views/ListNftForSale";
import UpdatePriceOfNFT from "views/UpdatePriceOfNFT";
import { AppContext } from "context/AppContextProvider";
import { checkUserSession } from "services";

const theme = createTheme({});
function App() {
  useEffect(() => {
    const checkSession = async () => {
      const result = await checkUserSession();
      if (result && result.isError === true) {
        window.localStorage.clear();
        notify(result.message);
      }
    };
    checkSession();
  }, []);
  const notify = (message) => toast(message);
  return (
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_MY_CLIENT}>
        <AppContextProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route
                  path="/explore/collectibles"
                  element={<Collectibles />}
                />
                <Route path="/explore" element={<Explore />} />
                <Route
                  path="/collections/:category/:id"
                  element={<CollectionDetail />}
                />
                <Route
                  path="/collections/:category"
                  element={<CollectionCategory />}
                />
                <Route
                  path="/admin/dashborad/listNftForSale/:id"
                  element={<ListNftForSale />}
                />
                <Route
                  path="/admin/dashborad/updatePriceOfNFT/:id"
                  element={<UpdatePriceOfNFT />}
                />
                <Route path="/collections" element={<Collections />} />
                <Route path="/creators/:id" element={<CreatorDetail />} />
                <Route path="/creators" element={<Creators />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/account" element={<Account />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/forgot/:id" element={<UpdateUserPasword />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/admin/dashborad" element={<AdminDashboard />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </AppContextProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
