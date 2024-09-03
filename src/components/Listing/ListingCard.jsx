import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ListingCard = ({ voiture }) => {

  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/listing/${voiture.id}`)}
      className="gap-5 border rounded-xl overflow-hidden justify-between flex flex-col xl:!flex-row cursor-pointer hover:bg-[#405ef209] transition duration-300 hover:shadow-lg"
      >
      <div className="xl:w-[35%] ">
        <img
          src={voiture.image}
          alt={voiture.name}
          className="h-full w-full object-fill"
        />
      </div>
      <div className="xl:py-6 flex flex-col gap-5 px-4 xl:p-0">
        <h2 className="text-2xl font-semibold">{voiture.name}</h2>
        <p>{voiture.location}</p>
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500">Mileage</p>
            <p>{voiture.mileage}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500">Engine</p>
            <p>{voiture.engine}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500">Transmission</p>
            <p>{voiture.transmission}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500">Type</p>
            <p>{voiture.type}</p>
          </div>
        </div>
        <div className="flex gap-4">
          {voiture.features.map((feature) => {
            return (
              <span className="py-2 rounded-full border  px-4 text-center">
                {feature}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col xl:py-7 px-4 xl:px-0 xl:pr-9 gap-4 pr-7 justify-end pb-4">
        {voiture.used ? (
          <p className="bg-gray-200 text-gray-500 px-3 py-2 rounded-full text-center font-bold">
            Used
          </p>
        ) : (
          <p className="bg-primary text-white px-3 py-2 rounded-full text-center font-bold">New</p>
        )}
        <h1 className="text-2xl font-semibold">£{voiture.price}</h1>
        <p>Monthly</p>
        <Button className="border-primary text-primary px-5 py-5">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ListingCard;
