import { Link } from "react-router-dom";
import { MainBanner } from "../../assets/images/index";

const Banner = () => {
    return (
      <div
        className="relative w-full h-screen text-white rounded-lg overflow-hidden bg-cover bg-center mt-5 mb-5"
        style={{ backgroundImage: `url(${MainBanner})` }}
      >
          <div className="absolute inset-0 bg-green-950 bg-opacity-50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 max-w-screen-lg mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
                  Строительные смеси
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-8">
                  Самый широкий выбор строительных смесей по выгодным ценам
              </p>
              <Link
                to="/catalog"
                className="inline-block bg-headerColor hover:bg-black text-white font-bold py-2 px-4 sm:py-2 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                  Перейти в магазин
              </Link>
          </div>
      </div>
    );
};

export default Banner;


