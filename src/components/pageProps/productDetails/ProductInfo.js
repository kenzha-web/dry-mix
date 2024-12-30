import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/orebiSlice";
import {memo} from "react";
import {formatPrice} from "../../../utils/price-format";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.name}</h2>
      <p className="text-xl font-semibold">{formatPrice(productInfo?.price || 0)}</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Категория:</span> {productInfo.category}
      </p>
      <p className="text-base text-gray-600">{productInfo.description}</p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.name,
              quantity: 1,
              image: productInfo.imageUrl,
              status: productInfo.status,
              price: productInfo.price || 0,
              category: productInfo.category,
            })
          )
        }
        className="w-full py-4 bg-greenPrimeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default memo(ProductInfo);
