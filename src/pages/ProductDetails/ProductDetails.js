import {memo, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";
import ProductFeature from "../../components/pageProps/productDetails/ProductFeature";

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    if (location.state?.item) {
      setProductInfo(location.state.item);
    }
    setPrevLocation(location.pathname);
  }, [location]);

  if (!productInfo) {
    return (
      <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
        <div className="max-w-container mx-auto px-4 py-10">
          <p>Товар не найден!</p>
        </div>
      </div>
    );
  }

  const imageUrl = productInfo.imageUrl ? `https://${productInfo.imageUrl}` : `http://${productInfo.imageUrl}`;

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full">
            <ProductsOnSale />
          </div>
          <div className="h-full xl:col-span-2">
            <img
              className="w-full xl:mt-16 object-cover"
              src={imageUrl}
              alt="Изображение"
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
        {/*<ProductFeature productInfo={productInfo} />*/}
      </div>
    </div>
  );
};

export default memo(ProductDetails);
