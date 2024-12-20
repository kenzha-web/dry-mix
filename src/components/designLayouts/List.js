import {memo} from "react";

const List = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

export default memo(List);
