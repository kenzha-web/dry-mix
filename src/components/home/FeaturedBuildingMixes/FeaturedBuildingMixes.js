import { memo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./../../designLayouts/buttons/SampleNextArrow";
import SamplePrevArrow from "./../../designLayouts/buttons/SamplePrevArrow";
import { getProducts } from "../../../store/features/products/productsSlice";
const FeaturedBuildingMixes = () => {
  const dispatch = useDispatch();
  const { list: products, isLoading } = useSelector((state) => state.products);
  const [activeTab, setActiveTab] = useState("Акция");
  const tabs = ["Новинка", "Акция", "Рекомендуем", "Хит"];

  useEffect(() => {
    dispatch(getProducts({ page: 1, limit: 12 }));
  }, [dispatch]);

  const filteredProducts = Array.isArray(products)
    ? products.filter(
      (item) =>
        item &&
        item.status?.toLowerCase() === activeTab.toLowerCase()
    )
    : [];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, filteredProducts.length), // Показать не больше, чем есть продуктов
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: Math.min(3, filteredProducts.length),
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: Math.min(2, filteredProducts.length),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(1, filteredProducts.length),
        },
      },
    ],
  };

  return (
    <div className="w-full pt-8 pb-8 md:pt-12 md:pb-12">
      <div className="mb-6 md:mb-8">
        <div className="flex items-center justify-between">
          <Heading heading="Строительные смеси" />
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

      {isLoading ? (
        <p className="text-center">Загрузка...</p>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.length > 1 ? (
          <Slider {...settings} className="px-2 md:px-4">
            {filteredProducts.map((item, index) => (
              <div className="px-1 md:px-2" key={item.id || index}>
                <Product
                  id={item.id || ""}
                  imageUrl={item.imageUrl}
                  name={item.name || "Без названия"}
                  price={item.price || 0}
                  category={item.category?.name || "—"}
                  status={item.status || ""}
                  description={item.description || "Нет описания"}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="px-2 md:px-4">
            <Product
              id={filteredProducts[0].id || ""}
              imageUrl={filteredProducts[0].imageUrl}
              name={filteredProducts[0].name || "Без названия"}
              price={filteredProducts[0].price || 0}
              category={filteredProducts[0].category?.name || "—"}
              status={filteredProducts[0].status || ""}
              description={filteredProducts[0].description || "Нет описания"}
            />
          </div>
        )
      ) : (
        <div className="text-center text-red-500 mt-4">
          Нет продуктов в категории "{activeTab}"
        </div>
      )}
    </div>
  );
};

export default memo(FeaturedBuildingMixes);



