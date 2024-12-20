import { Link } from "react-router-dom";
import { MainBanner } from "../../assets/images/index";
import {memo} from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen text-white rounded-lg overflow-hidden bg-cover bg-center mt-5 mb-5">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${MainBanner})` }}
      ></div>

      <div className="absolute inset-0 bg-green-950 bg-opacity-55"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 max-w-screen-lg mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg bg-opacity-55">
          Строительные смеси
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 drop-shadow-md">
          Самый широкий выбор строительных смесей по выгодным ценам
        </p>
        <Link
          to="/catalog"
          className="inline-block bg-headerColor text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-transform transform hover:scale-110 hover:bg-black text-sm sm:text-base"
        >
          Перейти в магазин
        </Link>
      </div>
    </div>
  );
};

export default memo(Banner);
