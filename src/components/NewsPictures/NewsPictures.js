import Image from "../designLayouts/Image";
import { memo } from "react";

const NewsPictures = ({ img }) => {
  return (
    <div className="w-full relative group max-w-xs py-4 md:py-6">
      <div className="max-w-full max-h-80 relative overflow-y-hidden">
        <Image className="w-full h-64 object-cover" imgSrc={img} />
      </div>
    </div>
  );
};

export default memo(NewsPictures);
