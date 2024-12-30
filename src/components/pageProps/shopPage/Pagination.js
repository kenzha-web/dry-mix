import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../store/features/products/productsSlice";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems
          .filter((item) => item && item.id)
          .map((item) => (
            <div key={item.id} className="w-full">
              <Product
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                description={item.description}
                status={item.status}
                specifications={item.specifications}
                category={item.category?.name || "Неизвестная категория"}
                createdAt={item.createdAt}
                inStock={item.inStock}
                price={item.price}
              />
            </div>
          ))}
    </>
  );
}

const Pagination = ({ itemsPerPage, selectedCategory }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.list) || [];
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  // Фильтрация продуктов по выбранной категории
  const filteredItems = selectedCategory
    ? items.filter((item) => item.category?.id === selectedCategory)
    : items;

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-greenPrimeColor text-white"
        />
        <p className="text-base font-normal text-greenPrimeColor">
          Товары от {(currentPage - 1) * itemsPerPage + 1} до{" "}
          {Math.min(currentPage * itemsPerPage, filteredItems.length)} из {filteredItems.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
