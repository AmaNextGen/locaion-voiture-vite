import ListingCard from "./ListingCard";

const ListingList = ({ listdesvoitures }) => {
  

  if(listdesvoitures.length === 0){
    return <div className="text-center text-2xl">No cars found</div>
  }

  

  return (
    <div className="flex flex-col gap-4">
      {listdesvoitures.map((voiture) => {
        return <ListingCard key={voiture.id} voiture={voiture} />;
      })}
    </div>
  );
};

export default ListingList;
