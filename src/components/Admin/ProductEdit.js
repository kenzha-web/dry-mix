import { useState } from "react";
import {AiOutlineCloudUpload} from "react-icons/ai";

const ProductEdit = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const [errProductName, setErrProductName] = useState("");
  const [errDescription, setErrDescription] = useState("");
  const [errPrice, setErrPrice] = useState("");
  const [errImage, setErrImage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!productName) {
      setErrProductName("Введите название продукта.");
    }
    if (!description) {
      setErrDescription("Введите описание.");
    }
    if (!price) {
      setErrPrice("Введите цену.");
    }
    if (!image) {
      setErrImage("Пожалуйста, загрузите изображение.");
    }

    if (productName && description && price && image) {
      try {
        const formData = new FormData();
        formData.append("productName", productName);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("image", image);

        const response = await fetch("/api/products", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setSuccessMsg("Продукт успешно создан.");
          setProductName("");
          setDescription("");
          setPrice("");
          setImage(null);
        } else {
          const errorData = await response.json();
          setErrImage(errorData.message || "Ошибка создания продукта.");
        }
      } catch (error) {
        setErrImage("Ошибка соединения с сервером.");
      }
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
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Название продукта
                  </p>
                  <input
                    onChange={handleProductName}
                    value={productName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
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
                    className="w-full h-20 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  ></textarea>
                  {errDescription && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errDescription}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Цена
                  </p>
                  <input
                    onChange={handlePrice}
                    value={price}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                  />
                  {errPrice && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPrice}
                    </p>
                  )}
                </div>
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
                  {image && (
                    <p className="text-sm text-green-500">Изображение выбрано</p>
                  )}
                  {errImage && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errImage}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSignUp}
                  className="bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300"
                >
                  Создать продукт
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductEdit;

