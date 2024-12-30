import { useEffect } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../store/features/categories/categoriesSlice";

const Category = ({ onSelectCategory }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-full">
      <NavTitle title="Каталог по категориям" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {list.map(({ id, name }) => (
            <li
              key={id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between cursor-pointer"
              onClick={() => onSelectCategory(id)} // Выбор категории
            >
              {name}
              <span className="text-[10px] lg:text-xs text-gray-400 hover:text-primeColor duration-300">
                <ImPlus />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
