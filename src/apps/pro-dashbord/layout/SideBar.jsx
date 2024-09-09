import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { DashboardOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isColapsed, setIsColapsed] = useState(false);

  const getActiveKey = () => {
    if(currentPath.includes('/pro-dashbord/dashbord')) return '1';
    if(currentPath.includes('/pro-dashbord/listings')) return '3';
  }

  return (
    <Layout.Sider
      theme="dark"
      width={200}
      collapsible
      collapsed={isColapsed}
      onCollapse={() => setIsColapsed(!isColapsed)}
    >
      <h1 className="text-3xl text-white text-center my-5 font-bold">
        {isColapsed ? "L" : "Logo"}
      </h1>
      <Menu
        theme="dark"
        selectedKeys={[getActiveKey()]}
        items={[
          {
            key: "1",
            label: <Link to="/pro-dashbord/dashbord">Tableau de bord</Link>,
            icon: <DashboardOutlined />,
          },
          {
            key: "2",
            label: "Location",
            icon: <DashboardOutlined />,
          },
          {
            key: "3",
            label: <Link to="/pro-dashbord/listings">Annonces</Link>,
            icon: <DashboardOutlined />,
          },
          {
            key: "4",
            label: "Clients",
            icon: <DashboardOutlined />,
          },
          {
            key: "5",
            label: "Chauffeurs",
            icon: <DashboardOutlined />,
          },
          {
            key: "6",
            label: "Réservations",
            icon: <DashboardOutlined />,
          },
          {
            key: "7",
            label: "Factures",
            icon: <DashboardOutlined />,
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default SideBar;
