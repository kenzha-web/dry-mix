import {memo} from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-greenPrimeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default memo(Badge);
