import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/orebiSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props._id;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <div className="w-full relative group">
      <div className="relative overflow-hidden">
        <div>
          <Image className="w-full h-full max-h-64 md:max-h-80 object-contain" imgSrc={props.img} />
        </div>
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          {props.badge && <Badge text="Новинки" />}
        </div>
        <div className="w-full h-20 md:h-24 absolute bg-white -bottom-[100px] group-hover:bottom-0 duration-500">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 md:gap-4 font-titleFont px-2 md:px-4 border-l border-r">
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
                )
              }
              className="text-sm md:text-md text-gray-600 hover:text-primeColor border-b-[1px] border-b-gray-300 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Добавить в корзину
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-sm md:text-md text-gray-600 hover:text-primeColor border-b-[1px] border-b-gray-300 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Просмотреть подробнее
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 md:py-6 flex flex-col gap-1 border-[1px] border-t-0 px-2 md:px-4 h-[180px] md:h-[200px]">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center">
            <h2 className="text-sm md:text-[16px] text-primeColor font-bold text-center">
              {props.productName}
            </h2>
            <p className="text-xs md:text-[14px] text-gray-500 text-center">
              {props.color}
            </p>
          </div>
          <div className="flex justify-center mt-2">
            <p className="text-sm md:text-[14px] text-gray-500">{props.price} тг</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

