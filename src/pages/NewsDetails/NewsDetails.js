import {memo, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import NewsInfo from "../../components/pageProps/newsDetails/NewsInfo";

const NewsDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [newsInfo, setNewsInfo] = useState([]);

  useEffect(() => {
    setNewsInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, newsInfo]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-[300px] xl:col-span-2">
            <img
              className="w-full h-full object-cover"
              src={newsInfo.img}
              alt={newsInfo.img}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:pl-10 flex flex-col gap-6 justify-center">
            <NewsInfo newsInfo={newsInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(NewsDetails);
