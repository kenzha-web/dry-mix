import {memo} from "react";

const Image = ({ imgSrc, className }) => {
  return <img className={className} src={imgSrc} alt="Изображение" />;
};

export default memo(Image);
