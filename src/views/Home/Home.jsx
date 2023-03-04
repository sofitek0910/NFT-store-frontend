import React from "react";

import Box from "@mui/material/Box";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Collections from "./components/Collections";
import NotableDrops from "./components/NotableDrops";
import Creators from "./components/Creators";
import RecentlyListed from "./components/RecentlyListed";
import Newsletter from "components/Newsletter";

const Home = () => {
  return (
    <Box>
      <Header />
      <Collections />
      <NotableDrops />
      <Creators />
      <RecentlyListed />
      <Categories />
      <Newsletter />
    </Box>
  );
};

export default Home;
