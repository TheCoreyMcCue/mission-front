"use client";
// import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "./utils";

import React from "react";
import Login from "./components/Login";
import HomeMain from "./components/HomeMain";

const Home = () => {
  const loggedIn = true;
  const [products, setProducts] = useState([]);
  const [deadlines, setDeadlines] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await client.fetch('*[_type == "product"]');
      setProducts(products);
      return;
    }
    async function getDeadlines() {
      const deadlines = await client.fetch('*[_type == "deadline"]');
      setDeadlines(deadlines);
      return;
    }
    async function getUser() {
      const users = await client.fetch('*[_type == "user"]');
      setUsers(users);
      return;
    }

    return () => {
      getProducts();
      getDeadlines();
      getUser();
    };
  }, []);

  deadlines &&
    console.log(
      "🚀 ~ Home ~ deadlines:",
      deadlines,
      "products",
      products,
      "users",
      users
    );

  return loggedIn ? <HomeMain /> : <Login />;
};

export default Home;
