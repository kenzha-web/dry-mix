import {memo} from "react";

const Badge = ({text}) => {
  const isRecommended = text === "рекомендуем";

  return (
    <div
      className={`bg-greenPrimeColor w-[92px] h-[35px] text-white flex justify-center items-center font-semibold hover:bg-black duration-300 cursor-pointer ${
        isRecommended ? "text-[12px]" : "text-base"
      }`}
    >
      {text}
    </div>
  );
};

export default memo(Badge);
