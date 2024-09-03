import React, { useState } from "react";
import WebsiteDarkHeader from "../Layout/WesbiteDarkHeader";
import SearchBar from "../components/search/SearchBar";
import {
  Breadcrumb,
  Checkbox,
  Input,
  Select,
  Slider as AntdSlider,
  InputNumber,
} from "antd";
import Slider from "react-slick";
import { listings, mainFilters } from "../data/cars";
import ListingList from "../components/Listing/ListingList";

const SearchPage = () => {

  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



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

          <Slider className="mb-7" {...settings}>
            {mainFilters.map((filter) => {
              return (
                <div 
                    className="text-center cursor-pointer"
                    onClick={() => console.log(filter.value)}
                  >
                  <div className="bg-white rounded-full p-2 border mx-2">
                    <p className="font-semibold w-full">{filter.label}</p>
                  </div>
                </div>
              );
            })}
          </Slider>

          <div className="flex gap-5">
            <div className="w-[30%] border rounded-lg p-3 h-full">
              <div className="border p-2 rounded-xl mb-5">
                <span className="text-gray-400 pl-3">Location</span>
                <Select className="w-full" size="large" defaultValue={"dikhil"}>
                  <Select.Option value="djibouti villde">
                    Djibouti Ville
                  </Select.Option>
                  <Select.Option value="djibouti">Djibouti</Select.Option>
                  <Select.Option value="ali sabieh">Ali Sabieh</Select.Option>
                  <Select.Option value="dikhil">Dikhil</Select.Option>
                  <Select.Option value="tadjourah">Tadjourah</Select.Option>
                </Select>
              </div>

              <div className="flex gap-5 mb-5">
                <div className="border p-2 rounded-xl w-full">
                  <span className="text-gray-400 pl-3">Search within</span>
                  <Select
                    className="w-full"
                    size="large"
                    defaultValue={"dikhil"}
                  >
                    <Select.Option value="djibouti villde">
                      Djibouti Ville
                    </Select.Option>
                    <Select.Option value="djibouti">Djibouti</Select.Option>
                    <Select.Option value="ali sabieh">Ali Sabieh</Select.Option>
                    <Select.Option value="dikhil">Dikhil</Select.Option>
                    <Select.Option value="tadjourah">Tadjourah</Select.Option>
                  </Select>
                </div>
                <div className="border p-2 rounded-xl w-full">
                  <span className="text-gray-400 pl-3">Zip Code</span>
                  <Input
                    className="w-full border-none"
                    size="large"
                    placeholder="Zip Code"
                  />
                </div>
              </div>

              <div className="border-y-2 py-3">
                <div className="border p-2 rounded-xl w-full">
                  <span className="text-gray-400 pl-3">Condition</span>
                  <Select
                    className="w-full"
                    size="large"
                  >
                    <Select.Option value="any">Any</Select.Option>
                    <Select.Option value="new">New</Select.Option>
                    <Select.Option value="used">Used</Select.Option>
                  </Select>
                </div>
              </div>

              <div className="py-3">
                <p className="text-lg font-semibold mb-3">Type</p>
                <div className="flex flex-col gap-3">
                  <Checkbox>SUV</Checkbox>
                  <Checkbox>Sedan</Checkbox>
                  <Checkbox>Truck</Checkbox>
                  <Checkbox>Coupe</Checkbox>
                </div>
              </div>

              <div className="border-y-2 py-3">
                <div className="border p-2 rounded-xl w-full">
                  <span className="text-gray-400 pl-3">Make</span>
                  <Select
                    className="w-full"
                    size="large"
                    defaultValue={"dikhil"}
                  >
                    <Select.Option value="djibouti villde">
                      Djibouti Ville
                    </Select.Option>
                    <Select.Option value="djibouti">Djibouti</Select.Option>
                    <Select.Option value="ali sabieh">Ali Sabieh</Select.Option>
                    <Select.Option value="dikhil">Dikhil</Select.Option>
                    <Select.Option value="tadjourah">Tadjourah</Select.Option>
                  </Select>
                </div>
              </div>

              <div className=" pt-3">
                <p className="text-lg font-semibold mb-3">Price</p>
                <div className="flex gap-5">
                  <div className="border p-2 rounded-xl w-full">
                    <span className="text-gray-400 pl-3">Min price</span>
                    <InputNumber className="w-full border-none" size="large" />
                  </div>
                  <div className="border p-2 rounded-xl w-full">
                    <span className="text-gray-400 pl-3">Max price</span>
                    <InputNumber className="w-full border-none" size="large" />
                  </div>
                </div>
                <AntdSlider className="w-full" range />
              </div>
            </div>
            <div className="w-[70%] p-5">
              <ListingList listdesvoitures={listings} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
