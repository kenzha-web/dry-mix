import {memo} from "react";
import {formatDate} from "../../../utils/date-format";

const NewsInfo = ({ newsInfo }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{newsInfo.title}</h2>
      <p className="font-medium text-lg">
        {formatDate(newsInfo.date)}
      </p>
      <p className="text-base text-gray-600 text-justify">{newsInfo.content}</p>
    </div>
  );
};

export default memo(NewsInfo);
