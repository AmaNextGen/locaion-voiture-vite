
import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { listdesvoitures } from "../../data/cars";
import { useLocation } from "react-router-dom";


const ListingList = ( ) => {
  
  const location = useLocation();
  const [voitures, setVoitures] = useState(listdesvoitures);

  const query = new URLSearchParams(location.search);
  const used = query.get('used');
  const suv = query.get('suv');

  useEffect(() => {

    let filteredCars = listdesvoitures; 

    if(used == "true"){
      filteredCars = listdesvoitures.filter((voiture) => voiture.used === true); 

    }else if (used == "false"){
      filteredCars = listdesvoitures.filter((voiture) => voiture.used === false);
    }
    if(suv){
      filteredCars = listdesvoitures.filter((voiture) => voiture.type === "SUV");
    }

    setVoitures(filteredCars);
  }, [location.search])


  if(voitures.length === 0){
    return <div className="text-center text-2xl">No cars found</div>
  }
 
  

  return (
    <div className="flex flex-col gap-4">
      {voitures.map((voiture) => {
        return <ListingCard key={voiture.id} voiture={voiture} />;
      })}
    </div>
  );
};

export default ListingList;
