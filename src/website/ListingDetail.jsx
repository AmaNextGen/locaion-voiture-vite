import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from 'antd';
import { listdesvoitures } from "../data/cars";

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = listdesvoitures.find((car) => car.id === parseInt(id));

  return (
    <div className="flex min-h-screen container mx-auto mt-5">
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Back Button */}
        <Button 
          type="default" 
          onClick={() => navigate(-1)} 
          className="mb-4"
        >
          Back
        </Button>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{car.name}</h1>
        <img src={car.image} alt={car.name} className="rounded w-full h-64 object-cover mb-8" />
        <p className="text-lg text-gray-600 mb-8">{car.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Year</h3>
            <p className="text-gray-500">{car.year}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <p className="text-gray-500">{car.price} $</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fuel Type</h3>
            <p className="text-gray-500">{car.fuel}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Mileage</h3>
            <p className="text-gray-500">{car.mileage} km</p>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 p-6 bg-white shadow-lg self-start">
        <h3 className="text-xl font-bold mb-4">Interested in this car?</h3>
        <p className="text-gray-500 mb-6">Contact us or book a test drive today!</p>
        <Button type="primary" className="w-full mb-4 bg-blue-500 hover:bg-blue-600">Contact Us</Button>
        <Button type="default" className="w-full">Book Test Drive</Button>
      </div>
    </div>
  );
};

export default ListingDetail;
