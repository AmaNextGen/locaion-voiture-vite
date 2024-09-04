import { Button, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const [used, setUsed] = useState("any");
  const [make, setMake] = useState("any");
  const [model, setModel] = useState("any");
  const [price, setPrice] = useState("any");

  const handleSearch = () => {
    const parameters = `?used=${used}&make=${make}&model=${model}&price=${price}`;
    navigate(`/search${parameters}`);
  };


  return (
    <div className="bg-white flex justify-between gap-4 p-2 rounded-full items-center mb-14 w-[800px]">

      <Select
        className="w-full"
        defaultValue={used}
        onChange={(value) => setUsed(value)}
      >
        <Select.Option value="any">Any Cars</Select.Option>
        <Select.Option value="used">Used Cars</Select.Option>
        <Select.Option value="new">New Cars</Select.Option>
      </Select>
      
      <Select
        defaultValue={make}
        className="w-full"
        onChange={(value) => setMake(value)}
      >
        <Select.Option value="any">Any Make</Select.Option>
        <Select.Option value="toyota">Toyota</Select.Option>
        <Select.Option value="honda">Honda</Select.Option>
        <Select.Option value="ford">Ford</Select.Option>
        <Select.Option value="bmw">BMW</Select.Option>
      </Select>
      <Select
        defaultValue={model}
        className="w-full"
        onChange={(value) => setModel(value)}
      >
        <Select.Option value="any">Any Model</Select.Option>
        <Select.Option value="corolla">Corolla</Select.Option>
        <Select.Option value="civic">Civic</Select.Option>
        <Select.Option value="mustang">Mustang</Select.Option>
        <Select.Option value="x5">X5</Select.Option>
      </Select>
      <Select
        defaultValue={price}
        className="w-full"
        onChange={(value) => setPrice(value)}
      >
        <Select.Option value="any">Any Price</Select.Option>
        <Select.Option value="0-20k">Up to $20,000</Select.Option>
        <Select.Option value="20k-40k">$20,000 - $40,000</Select.Option>
        <Select.Option value="40k-60k">$40,000 - $60,000</Select.Option>
        <Select.Option value="60k+">Over $60,000</Select.Option>
      </Select>
      <Button
        onClick={handleSearch}
        className="bg-primary text-white rounded-full px-9 h-11"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
