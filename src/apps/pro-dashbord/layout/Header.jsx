import { Layout } from "antd";
import React from "react";

const Header = ({title}) => {
  return (
    <Layout.Header className="flex justify-between items-center p-5">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="flex items-center">
        <span className="text-gray-500 mr-5">Nom Prénom</span>
        <img
          src="https://via.placeholder.com/150"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </Layout.Header>
  );
};

export default Header;
