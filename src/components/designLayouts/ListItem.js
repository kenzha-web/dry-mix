import {memo} from "react";

const ListItem = ({ itemName, className }) => {
  return <li className={className}>{itemName}</li>;
};

export default memo(ListItem);
