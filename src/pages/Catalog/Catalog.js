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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // Управление состоянием мобильной панели

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
    setIsMobileNavOpen(false);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Каталог" />
      <div className="w-full h-full flex flex-col gap-6 pb-20 mdl:flex-row mdl:gap-10">
        <button
          className="mdl:hidden mb-4 bg-greenPrimeColor text-white py-2 px-4 rounded"
          onClick={() => setIsMobileNavOpen(true)}
        >
          Открыть категории
        </button>
        {isMobileNavOpen && (
          <div className="fixed inset-0 bg-white z-50 p-4 overflow-auto">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setIsMobileNavOpen(false)}
            >
              ✖
            </button>
            <ShopSideNav onSelectCategory={handleCategorySelect} />
          </div>
        )}
        <div className="hidden mdl:inline-flex w-full mdl:w-[25%] h-full">
          <ShopSideNav onSelectCategory={handleCategorySelect} />
        </div>
        <div className="w-full mdl:w-[75%] h-full flex flex-col gap-10">
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
