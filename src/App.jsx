import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./website/HomePage";
import SearchPage from "./website/SearchPage";
import ListingDetail from "./website/ListingDetail";
import NotFound from "./components/NotFound";
import ProMainDashordContainer from "./apps/pro-dashbord/pro-main-dashnoard/ProMainDashordContainer";
import ProListingContainer from "./apps/pro-dashbord/listings/ProListingContainer";
import ProDashbordLayout from "./apps/pro-dashbord/layout/ProDashbordLayout";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/listing/:id" element={<ListingDetail />} />
      <Route path="/pro-dashbord/dashbord" element={
        <ProDashbordLayout title={"Tableau de bord"}>
          <ProMainDashordContainer />
        </ProDashbordLayout>
        } />
      <Route path="/pro-dashbord/listings" element={
        <ProDashbordLayout title={"Annonces"}>
          <ProListingContainer />
        </ProDashbordLayout>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
