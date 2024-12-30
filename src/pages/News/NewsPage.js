import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import PaginationForNews from "../../components/pageProps/shopPage/PaginationForNews";
import Comments from "../../components/Comments/Comments";
import { useDispatch } from "react-redux";
import { getPosts } from "../../store/features/posts/postsSlice";

const NewsPage = () => {
  const dispatch = useDispatch();
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    dispatch(getPosts());
    setPrevLocation(location.state?.data || ""); // Проверка наличия location.state.data
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Новости" prevLocation={prevLocation} />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-full mdl:w-[100%] lgl:w-[100%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <PaginationForNews itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default memo(NewsPage);
