import { useState } from "react";
import ReactPaginate from "react-paginate";
import { paginationItemsForNews } from "../../../constants";
import News from "../../home/News/News";

const items = paginationItemsForNews;
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <News
              _id={item._id}
              img={item.img}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          </div>
        ))}
    </>
  );
}

const PaginationForNews = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
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
          Новости от {itemStart === 0 ? 1 : itemStart} до {endOffset} из{" "}
          {items.length}
        </p>
      </div>
    </div>
  );
};

export default PaginationForNews;
