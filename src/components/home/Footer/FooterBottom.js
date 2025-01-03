import { AiOutlineCopyright } from "react-icons/ai";
import {memo} from "react";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          СтройСмеси 2025 | Производство сухих строительных смесей
        </p>
      </div>
    </div>
  );
};

export default memo(FooterBottom);
