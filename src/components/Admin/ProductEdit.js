import { memo, useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/features/categories/categoriesSlice";
import {createProduct, deleteProduct, getProducts, updateProduct} from "../../store/features/products/productsSlice";

const ProductEdit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const [errProductName, setErrProductName] = useState("");
  const [errDescription, setErrDescription] = useState("");
  const [errPrice, setErrPrice] = useState("");
  const [errImage, setErrImage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [inStock, setInStock] = useState(false);
  const [status, setStatus] = useState("");
  const [errStatus, setErrStatus] = useState("");
  const [errInStock, setErrInStock] = useState("");

  const [specifications, setSpecifications] = useState({
    color: "",
    dryingTime: "",
    waterproof: false,
    mixingRatio: "",
    maxGrainSize: "",
    materialClass: "",
    mobilityClass: "",
    strengthClass: "",
    frostResistance: "",
    adhesionStrength: "",
    effectiveActivity: "",
    solutionViability: "",
    compressiveStrength: "",
    materialConsumption: "",
    applicationTemperature: "",
  });
  const [errSpecifications, setErrSpecifications] = useState("");


  const [categoryId, setCategoryId] = useState("");
  const [errCategory, setErrCategory] = useState("");

  const dispatch = useDispatch();

  const { list: categories } = useSelector((state) => state.categories);
  const { list: products, isLoading, deleteError, updateError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");

  // ====== УДАЛЕНИЕ товара ======
  const openDeleteModal = () => {
    setDeleteProductId(""); // сброс выбора
    setShowDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleConfirmDelete = (e) => {
    e.preventDefault();
    if (!deleteProductId) return;
    setIsSubmitting(true);
    dispatch(deleteProduct(deleteProductId))
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

  const handleProductName = (e) => {
    setProductName(e.target.value);
    setErrProductName("");
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    setErrDescription("");
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    setErrPrice("");
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setErrImage("");
    } else {
      setErrImage("Выберите изображение.");
    }
  };

  const handleInStock = (e) => {
    setInStock(e.target.checked);
    setErrInStock("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setErrStatus("");
  };

  const handleSpecChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Если checkbox (waterproof), то value = checked (true/false)
    setSpecifications((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrSpecifications("");
  };

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
    setErrCategory("");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      !productName ||
      !description ||
      !price ||
      !image ||
      !status ||
      !categoryId
    ) {
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);
      formData.append("status", status);
      formData.append("categoryId", categoryId);

      const resultAction = await dispatch(createProduct(formData)).unwrap();

      setSuccessMsg("Продукт успешно создан!");

      setProductName("");
      setDescription("");
      setPrice("");
      setImage(null);
      setInStock(false);
      setStatus("");
      setCategoryId("");
      setSpecifications(null);
    } catch (error) {
      console.error("Ошибка создания продукта:", error);
      setErrImage(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full lgl:w-[500px] mx-auto flex flex-col justify-start">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-full flex flex-col justify-start">
            <div className="px-6 py-4 w-full h-full flex flex-col justify-start">
              <h1 className="font-titleFont text-center underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 pt-10">
                Создать продукт
              </h1>

              <div className="flex flex-col gap-3 pb-6">
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Название продукта
                  </p>
                  <input
                    onChange={handleProductName}
                    value={productName}
                    className="w-full h-8 placeholder:text-sm px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                  />
                  {errProductName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errProductName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Описание
                  </p>
                  <textarea
                    value={description}
                    onChange={handleDescription}
                    className="w-full h-20 placeholder:text-sm px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none"
                  ></textarea>
                  {errDescription && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errDescription}
                    </p>
                  )}
                </div>

                {/* Цена */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Цена
                  </p>
                  <input
                    onChange={handlePrice}
                    value={price}
                    className="w-full h-8 placeholder:text-sm px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                  />
                  {errPrice && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPrice}
                    </p>
                  )}
                </div>

                {/* Загрузить изображение */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Загрузить изображение
                  </p>
                  <label className="flex items-center justify-center h-20 border-[2px] border-dashed border-gray-400 rounded-md cursor-pointer hover:border-greenPrimeColor">
                    <AiOutlineCloudUpload size={24} className="text-gray-600" />
                    <span className="ml-2 text-sm text-gray-600">Загрузить</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImage}
                      className="hidden"
                    />
                  </label>
                  {image && <p className="text-sm text-green-500">Изображение выбрано</p>}
                  {errImage && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errImage}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={inStock}
                    onChange={handleInStock}
                  />
                  <label htmlFor="inStock" className="text-base text-gray-600">
                    В наличии
                  </label>
                </div>
                {errInStock && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errInStock}
                  </p>
                )}

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Статус (пример: "новинка")
                  </p>
                  <input
                    value={status}
                    onChange={handleStatus}
                    className="w-full h-8 placeholder:text-sm px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                  />
                  {errStatus && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errStatus}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Категория
                  </p>
                  <select
                    value={categoryId}
                    onChange={handleCategoryChange}
                    className="w-full h-8 px-2 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none"
                  >
                    <option value="">Выберите категорию</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  {errCategory && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCategory}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={openDeleteModal}
                className={`${"bg-red-500 hover:bg-red-700 hover:text-white cursor-pointer"} w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
              >
                Удалить продукт
              </button>
              <div className="w-full lgl:w-[500px] mx-auto flex flex-col justify-start">
                {showDeleteModal && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md w-[300px]">
                      <h2 className="text-xl font-semibold mb-4">Удалить продукт</h2>
                      {isLoading ? (
                        <p>Загрузка...</p>
                      ) : (
                        <select
                          className="border border-gray-300 rounded w-full mb-4 p-2"
                          value={deleteProductId}
                          onChange={(e) => setDeleteProductId(e.target.value)}
                        >
                          <option value="">Выберите продукт</option>
                          {products.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                      )}
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
                onClick={handleSignUp}
                disabled={isSubmitting}
                className={`mt-6 bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Создать продукт
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default memo(ProductEdit);

