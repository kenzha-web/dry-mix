import {memo, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {createPosts, deletePosts, getPosts} from "../../store/features/posts/postsSlice";
import {formatDate} from "../../utils/date-format";

const NewsEdit = () => {
  const dispatch = useDispatch();
  const { list: posts, isLoading, deleteError, updateError } = useSelector((state) => state.posts);
  console.log(posts)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePostId, setDeletePostId] = useState("");

  useEffect(() => {
    dispatch(getPosts({ page: 1, limit: 12 }));
  }, [dispatch]);

  const openDeleteModal = () => {
    setDeletePostId(""); // сброс выбора
    setShowDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleConfirmDelete = (e) => {
    e.preventDefault();
    if (!deletePostId) return;
    setIsSubmitting(true);
    dispatch(deletePosts(deletePostId))
      .unwrap()
      .then(() => {
        closeDeleteModal();
      })
      .catch((err) => {
        console.error("Ошибка при удалении:", err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    setPreviewImage(file);
    setErrMessages("");
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setErrMessages("");
  };

  const handlePostTitle = (e) => {
    setTitle(e.target.value);
    setErrMessages("");
  };
  const handlePostContent = (e) => {
    setContent(e.target.value);
    setErrMessages("");
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!title) {
      setErrMessages("Введите заголовок новости.");
      return;
    }
    if (!content) {
      setErrMessages("Введите описание новости.");
      return;
    }

    if (!previewImage) {
      setErrMessages("Выберите превью-изображение.");
      return;
    }
    if (images.length === 0) {
      setErrMessages("Добавьте хотя бы одно изображение.");
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("previewImage", previewImage);
      formData.append("images[]", images);

      const resultAction = await dispatch(createPosts(formData)).unwrap();

      setSuccessMsg("Новость успешно создана.");
      setPreviewImage(null);
      setImages([]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Ошибка создания новости:", error);

      const errorMessages = Array.isArray(error?.message)
        ? error.message.join(", ")
        : error?.message || "Произошла ошибка.";

      setErrMessages(errorMessages);
    } finally {
      setIsSubmitting(false);
    }
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
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold
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
                Создать новость
              </h1>

              <div className="flex flex-col gap-3 pb-6">
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Превью-изображение
                  </p>
                  <label className="flex items-center justify-center h-20 border-[2px] border-dashed border-gray-400 rounded-md cursor-pointer hover:border-greenPrimeColor">
                    <AiOutlineCloudUpload size={24} className="text-gray-600" />
                    <span className="ml-2 text-sm text-gray-600">Загрузить</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePreviewImage}
                      className="hidden"
                    />
                  </label>
                  {previewImage && (
                    <p className="text-sm text-green-500">Изображение выбрано</p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Изображения (несколько)
                  </p>
                  <label className="flex items-center justify-center h-20 border-[2px] border-dashed border-gray-400 rounded-md cursor-pointer hover:border-greenPrimeColor">
                    <AiOutlineCloudUpload size={24} className="text-gray-600" />
                    <span className="ml-2 text-sm text-gray-600">Загрузить</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImages}
                      className="hidden"
                    />
                  </label>
                  {images.length > 0 && (
                    <p className="text-sm text-green-500">
                      Выбрано {images.length} изображений
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Заголовок новости
                  </p>
                  <input
                    type="text"
                    value={title}
                    onChange={handlePostTitle}
                    placeholder="Введите заголовок"
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Описание новости
                  </p>
                  <textarea
                    value={content}
                    onChange={handlePostContent}
                    placeholder="Введите описание"
                    className="w-full h-20 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  ></textarea>
                </div>
                {errMessages && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errMessages}
                  </p>
                )}
              </div>
              <button
                onClick={openDeleteModal}
                className={`${"bg-red-500 hover:bg-red-700 hover:text-white cursor-pointer"} w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
              >
                Удалить новость
              </button>
              <div className="w-full lgl:w-[500px] mx-auto flex flex-col justify-start">
                {showDeleteModal && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md w-[300px]">
                      <h2 className="text-xl font-semibold mb-4">Удалить новость</h2>
                      <select
                        className="border border-gray-300 rounded w-full mb-4 p-2"
                        value={deletePostId}
                        onChange={(e) => setDeletePostId(e.target.value)}
                      >
                        <option value="">Выберите новость</option>
                        {Array.isArray(posts) && posts.map((p) => (
                          <option key={p.id} value={p.id}>
                            {formatDate(p.createdAt)}
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
              <button
                onClick={handleCreate}
                disabled={isSubmitting}
                className={`mt-6 bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Создать новость
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default memo(NewsEdit);


