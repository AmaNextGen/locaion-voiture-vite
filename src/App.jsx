import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./website/HomePage";
import SearchPage from "./website/SearchPage";
import ListingDetail from "./website/ListingDetail";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/listing/:id" element={<ListingDetail />} />
    </Routes>
  </Router>
);

export default App;
