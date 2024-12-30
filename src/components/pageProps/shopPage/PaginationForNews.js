import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import News from "../../home/News/News";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../../store/features/posts/postsSlice";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems
          .filter((item) => item && item.id)
          .map((item) => (
            <div key={item.id} className="w-full">
              <News
                id={item.id}
                previewImage={item.previewImage}
                title={item.title}
                date={item.createdAt}
                content={item.content}
                comments={item.comments}
              />
            </div>
          ))}
    </>
  );
}

const PaginationForNews = ({ itemsPerPage }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.posts.list) || [];
  const [currentPage, setCurrentPage] = useState(1);

  const itemOffset = (currentPage - 1) * itemsPerPage;

  useEffect(() => {
    dispatch(getPosts({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  const validItems = items.filter((item) => item && item.id);
  const currentItems = validItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const pageCount = Math.ceil(validItems.length / itemsPerPage);

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
          Новости от {(itemOffset + 1)} до {Math.min(itemOffset + itemsPerPage, validItems.length)} из {validItems.length}
        </p>
      </div>
    </div>
  );
};


export default PaginationForNews;
