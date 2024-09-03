import React from 'react';
import { ConfigProvider } from "antd";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#405FF2",
                colorPrimaryActive: "#405FF2",
                colorPrimaryTextActive: "#405FF2",
                colorPrimaryTextHover: "#405FF2",
                colorLink: "#405FF2",
              },
            }}
    >
        <App />
    </ConfigProvider>
  </React.StrictMode>
);
