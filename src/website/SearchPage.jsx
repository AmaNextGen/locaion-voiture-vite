import React from "react";
import WebsiteDarkHeader from "../Layout/WesbiteDarkHeader";
import SearchBar from "../components/search/SearchBar";
import { Breadcrumb } from "antd";
import ListingList from "../components/Listing/ListingList";
import SearchFilters from "../components/search/SearchFilters";
import SearchSlidefilters from "../components/search/SearchSlidefilters";

const SearchPage = () => {
  return (
    <div>
      <div className="bg-[#050B20] pb-6">
        <WebsiteDarkHeader />
        <div className="flex items-center justify-center mt-9">
          <SearchBar />
        </div>
      </div>
      <div className="pt-9 bg-white  rounded-[50px] mt-[-40px]">
        <div className="container mx-auto">
          <Breadcrumb className="mb-3">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Search</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="text-3xl font-black mb-5">
            What Kind of Car Should I Get? Try Boxcars Car Finder to Find a Car
          </h1>

          <SearchSlidefilters />

          <div className="flex gap-5">
            <div className="w-[30%]">
              <SearchFilters />
            </div>
            <div className="w-[70%] p-5">
              <ListingList  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
