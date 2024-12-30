import {memo, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../store/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemBasket from "./ItemBasket";
import {formatPrice} from "../../utils/price-format";

const Basket = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Корзина" />
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Продукт</h2>
            <h2>Цена</h2>
            <h2>Количество</h2>
            <h2>Сумма</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemBasket item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Сбросить корзину
          </button>

          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Итоговые суммы</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Итого
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    {formatPrice(totalAmt)}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/catalog">
                  <button className="w-52 h-10 bg-greenPrimeColor text-white hover:bg-black duration-300">
                    Перейти в каталог
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Ваша корзина пуста!
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Чтобы рассчитать стоимость, добавьте товары в корзину. Перейдите в каталог и выберите всё необходимое.
            </p>
            <Link to="/catalog">
              <button className="bg-greenPrimeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Перейдите в каталог
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default memo(Basket);
