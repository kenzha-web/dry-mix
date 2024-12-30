import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, deleteCategory, getCategories } from "../../store/features/categories/categoriesSlice";

const CategoryEdit = () => {
  const dispatch = useDispatch();
  const { list, isLoading, createError, deleteError } = useSelector((state) => state.categories);

  const [category, setCategory] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState("");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleMessages = (e) => {
    setCategory(e.target.value);
    setErrMessages("");
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!category) {
      setErrMessages("Введите название категории");
      return;
    }

    setIsSubmitting(true);
    dispatch(createCategory(category))
      .unwrap()
      .then(() => {
        setSuccessMsg("Категория успешно создана.");
        setCategory("");
      })
      .catch((error) => {
        setErrMessages(`Ошибка создания: ${error.message || "Неизвестная ошибка"}`);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const openDeleteModal = () => {
    setCategoryIdToDelete(""); // сброс выбора
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = (e) => {
    e.preventDefault();
    if (!categoryIdToDelete) {
      setErrMessages("Выберите категорию для удаления");
      return;
    }

    setIsSubmitting(true);
    dispatch(deleteCategory(categoryIdToDelete))
      .unwrap()
      .then(() => {
        setSuccessMsg("Категория успешно удалена.");
        setCategoryIdToDelete("");
        setShowDeleteModal(false);
        dispatch(getCategories());
      })
      .catch((error) => {
        setErrMessages(`Ошибка удаления: ${error.message || "Неизвестная ошибка"}`);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex flex-col">
      <div className="w-full lgl:w-[500px] mx-auto flex flex-col justify-start">
        {successMsg ? (
          <div className="w-full">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/manage">
              <button
                className="w-ful h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold
                tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Вернуться назад
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-full flex flex-col justify-start">
            <div className="px-6 py-4 w-full h-full flex flex-col justify-start">
              <h1 className="font-titleFont text-center underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 pt-10">
                Создать категорию
              </h1>
              <div className="flex flex-col gap-3 pb-6">
                <div className="flex flex-col gap-0.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Название категории
                  </p>
                  <input
                    onChange={handleMessages}
                    value={category}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Введите название категории"
                  />
                  {errMessages && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errMessages}
                    </p>
                  )}
                </div>
                <button
                  onClick={openDeleteModal}
                  className="bg-red-500 hover:bg-red-700 hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300"
                >
                  Удалить категорию
                </button>
                <button
                  onClick={handleCreate}
                  disabled={isSubmitting}
                  className={`bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Создать категорию
                </button>
              </div>
            </div>
          </form>
        )}

        {showDeleteModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md w-[300px]">
              <h2 className="text-xl font-semibold mb-4">Удалить категорию</h2>
              <select
                className="border border-gray-300 rounded w-full mb-4 p-2"
                value={categoryIdToDelete}
                onChange={(e) => setCategoryIdToDelete(e.target.value)}
              >
                <option value="">Выберите категорию</option>
                {list.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleConfirmDelete}
                  disabled={isSubmitting}
                  className={`bg-red-500 text-white px-4 py-2 rounded ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Удалить
                </button>
                <button
                  onClick={closeDeleteModal}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Отмена
                </button>
              </div>
              {deleteError && (
                <p className="text-red-500 mt-2">Ошибка: {deleteError}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(CategoryEdit);
