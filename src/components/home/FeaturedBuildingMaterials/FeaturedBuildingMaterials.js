import {useState} from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
    MaterialsOne
} from "../../../assets/images/index";
import SampleNextArrow from "../../designLayouts/buttons/SampleNextArrow";
import SamplePrevArrow from "../../designLayouts/buttons/SamplePrevArrow";

const FeaturedBuildingMaterials = () => {
    const [activeTab, setActiveTab] = useState(""); // Управление активной вкладкой

    const tabs = ["Новинка", "Акция", "Рекомендуем", "Хит"]; // Вкладки

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
      <div className="w-full pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center justify-between">
              <Heading heading="Строительные материалы" />
              <p className="text-greenPrimeColor cursor-pointer text-sm md:text-base">
                Перейти в каталог
              </p>
            </div>
            <div className="flex justify-between items-center mt-4 md:mt-6 border-b-4 border-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 md:pb-4 text-sm md:text-xl font-bold ${
                    activeTab === tab
                      ? "text-greenPrimeColor border-b-4 border-greenPrimeColor"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <Slider {...settings}>
              <div className="px-2">
                  <Product
                    _id="100001"
                    img={MaterialsOne}
                    productName="Пазогребневая плита из гипса"
                    price="999"
                    color="Крупноразмерные панели"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                  />
              </div>
              <div className="px-2">
                  <Product
                    _id="100002"
                    img={MaterialsOne}
                    productName="Пазогребневая плита из гипса"
                    price="999"
                    color="Крупноразмерные панели"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                  />
              </div>
              <div className="px-2">
                  <Product
                    _id="100003"
                    img={MaterialsOne}
                    productName="Пазогребневая плита из гипса"
                    price="999"
                    color="Крупноразмерные панели"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                  />
              </div>
              <div className="px-2">
                  <Product
                    _id="100004"
                    img={MaterialsOne}
                    productName="Пазогребневая плита из гипса"
                    price="999"
                    color="Крупноразмерные панели"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                  />
              </div>
              <div className="px-2">
                  <Product
                    _id="100005"
                    img={MaterialsOne}
                    productName="Пазогребневая плита из гипса"
                    price="999"
                    color="Крупноразмерные панели"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                  />
              </div>
          </Slider>
      </div>
    );
};

export default FeaturedBuildingMaterials;
