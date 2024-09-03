import React from "react";
import { Button } from "antd";
import Hero from "../components/Hero";

const WebsiteHeader = () => {
  return (

    <div className="bg-hero bg-cover bg-center" style={{ backgroundImage: "url('/images/main-hero-bg.jpg')" }}>
      <div className="flex justify-between  p-5">
        <img src={"/images/logo.png"} alt="logo" className="mr-5" width={130} />

        <div className="flex gap-5">
          <nav>
            <ul className="flex gap-5 text-white">
              <li>
                <a href="">Rent</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
              <li>
                <a href="">Sell</a>
              </li>
              <li>
                <a href="">Manage Property</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
            </ul>
          </nav>
          <Button className="bg-transparent  bg-white text-black">
            Submit listing
          </Button>
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default WebsiteHeader;
