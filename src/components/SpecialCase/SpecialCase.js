import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io"
import { useSelector } from "react-redux";
import {memo} from "react";

const SpecialCase = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const phoneNumber = "+77719137442";
  return (
    <div className="fixed top-52 right-2 z-20 flex flex-col gap-2 md:flex-col md:top-52 sm:right-2">
      <a
        href={`tel:${phoneNumber}`}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/contact";
          setTimeout(() => {
            window.location.href = `tel:${phoneNumber}`;
          }, 500);
        }}
      >
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer">
          <div className="flex justify-center items-center">
            <IoMdCall className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <IoMdCall className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Звонок</p>
        </div>
      </a>
      <Link to="/basket">
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Корзина</p>
          {products.length > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default memo(SpecialCase);
