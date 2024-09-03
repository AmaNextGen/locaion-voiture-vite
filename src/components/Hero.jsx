import React from "react";
import { Tabs } from "antd";
import SearchBar from "./search/SearchBar";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-16 hero">
      <p className="my-5 text-white">
        A great platform to buy, sell, or even rent your 
      </p>
      <h1 className="font-black text-6xl text-center text-white">
        Buy, rent, or sell <br /> your property <br /> easily
      </h1>
      <Tabs className="p-4 py-2 rounded-lg text-white"centered >
        <Tabs.TabPane tab="Rent" key="1" className="bg-white rounded-lg ">
          <SearchBar />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Buy" key="2" className="bg-white rounded-lg" >
          <SearchBar />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Sell" key="3" className="bg-white rounded-lg">
          <SearchBar />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Hero;

