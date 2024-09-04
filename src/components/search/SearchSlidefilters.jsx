import Slider from "react-slick";
import { mainFilters } from "../../data/cars";
import { useNavigate } from "react-router-dom";

const SearchSlidefilters = () => {
  const navigate = useNavigate();

  const query = new URLSearchParams(window.location.search);

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
    <Slider className="mb-7" {...settings}>
      {mainFilters.map((filter) => {

        const filterExist = query.get(filter.value);

        return (
          <div
            className="text-center cursor-pointer"
            onClick={() => {
              const name = filter.value;
              const value = filter.value;

              if(filterExist){
                query.delete(name);
              }else{
                query.set(name, value);
              }
              
              const parameters = `?${query.toString()}`;
              navigate(`/search${parameters}`);
            }}
          >
            <div
              className={`
                bg-white rounded-full p-2 border mx-2 
                ${
                  filterExist
                    ? "bg-[#405ef26b] border-primary text-primary"
                    : "border-gray-300"
                }
                `}
            >
              <p className="font-semibold w-full">{filter.label}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SearchSlidefilters;
