
import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { listdesvoitures } from "../../data/cars";
import { useLocation } from "react-router-dom";


const ListingList = ( ) => {
  
  const location = useLocation();
  const [voitures, setVoitures] = useState(listdesvoitures);

  const query = new URLSearchParams(location.search);
  const used = query.get('used');

  useEffect(() => {

    if(used == "true"){
      const usedCard = listdesvoitures.filter((voiture) => voiture.used === true);
      setVoitures(usedCard);
    }else if (used == "false"){
      const newCard = listdesvoitures.filter((voiture) => voiture.used === false);
      setVoitures(newCard);
    }
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
