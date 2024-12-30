import { memo, useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/features/products/productsSlice";
import { getCategories } from "../../store/features/categories/categoriesSlice";

const Catalog = () => {
  const dispatch = useDispatch();
  const { list: categories, isLoading: isCategoriesLoading } = useSelector((state) => state.categories);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState(null); // Выбранная категория

  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  useEffect(() => {
    dispatch(getCategories()).then(({ payload }) => {
      const defaultCategory = payload.find((cat) => cat.name === "Пазогребневые плиты");
      if (defaultCategory) {
        setSelectedCategory(defaultCategory.id);
      }
    });
    dispatch(getProducts());
  }, [dispatch]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Каталог" />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav onSelectCategory={handleCategorySelect} />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          {!isCategoriesLoading && (
            <Pagination itemsPerPage={itemsPerPage} selectedCategory={selectedCategory} />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Catalog);
