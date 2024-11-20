"use client";

import React, { useState } from "react";
import Hero from "./(home)/hero/Hero";
import HotProducts from "./(home)/hotProducts/HotProducts";
import Categories from "./(home)/hero/categories/Categories";
import LatestProducts from "./(home)/latestProducts/LatestProducts";
import Phones from "./(home)/phones/Phones";

import { useEffect } from "react";

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log("Use Effect is running...");

    return () => {
      console.log("");
    };
  }, []);

  return (
    <main>
      <Hero />
      <HotProducts />
      <Categories />
      <LatestProducts />
      <Phones />
    </main>
  );
};

export default Home;
