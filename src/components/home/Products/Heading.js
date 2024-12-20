import {memo} from "react";

const Heading = ({ heading }) => {
  return <div className="text-lg md:text-xl lg:text-3xl font-semibold">{heading}</div>;
};

export default memo(Heading);
