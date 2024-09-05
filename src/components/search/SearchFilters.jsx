import {
  Checkbox,
  Input,
  Select,
  Slider as AntdSlider,
  InputNumber,
} from "antd";
import { useNavigate } from "react-router-dom";

const SearchFilters = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);

  const setQuery = (name, value) => {
    query.set(name, value);
    const parameters = `?${query.toString()}`;
    navigate(`/search${parameters}`);
  };

  return (
    <div className="border rounded-lg p-3 h-full">
      <div className="border p-2 rounded-xl mb-5">
        <span className="text-gray-400 pl-3">Location</span>
        <Select
          className="w-full"
          size="large"
          defaultValue={"dikhil"}
          onChange={(value) => setQuery("location", value)}
        >
          <Select.Option value="djibouti villde">Djibouti Ville</Select.Option>
          <Select.Option value="djibouti">Djibouti</Select.Option>
          <Select.Option value="ali sabieh">Ali Sabieh</Select.Option>
          <Select.Option value="dikhil">Dikhil</Select.Option>
          <Select.Option value="tadjourah">Tadjourah</Select.Option>
        </Select>
      </div>

      <div className="flex gap-5 mb-5">
        <div className="border p-2 rounded-xl w-full">
          <span className="text-gray-400 pl-3">Search within</span>
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
          <Select className="w-full" size="large">
            <Select.Option value="any">Any</Select.Option>
            <Select.Option value="new">New</Select.Option>
            <Select.Option value="used">Used</Select.Option>
          </Select>
        </div>
      </div>

      <div className="py-3">
        <p className="text-lg font-semibold mb-3">Type</p>
        <div className="flex flex-col gap-3">
          <Checkbox
            onChange={(e) => {
              setQuery("type", e.target.checked ? "suv" : "");
            }}
          >
            SUV
          </Checkbox>
          <Checkbox onChange={(e) => {}}>Sedan</Checkbox>
          <Checkbox>Truck</Checkbox>
          <Checkbox>Coupe</Checkbox>
        </div>
      </div>

      <div className="border-y-2 py-3">
        <div className="border p-2 rounded-xl w-full">
          <span className="text-gray-400 pl-3">Make</span>
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
  );
};

export default SearchFilters;
