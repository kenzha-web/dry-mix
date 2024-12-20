import {memo} from "react";

const FooterListTitle = ({ title }) => {
  return <h3 className="text-xl text-white font-bodyFont font-semibold mb-6">{title}</h3>;
};

export default memo(FooterListTitle);
