import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";

const NewsEdit = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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

  const handleCreate = (e) => {
    e.preventDefault();
    if (!previewImage) {
      setErrMessages("Выберите превью-изображение.");
      return;
    }
    if (images.length === 0) {
      setErrMessages("Добавьте хотя бы одно изображение.");
      return;
    }
    if (!title) {
      setErrMessages("Введите заголовок новости.");
      return;
    }
    if (!description) {
      setErrMessages("Введите описание новости.");
      return;
    }

    setSuccessMsg("Новость успешно создана.");
    setPreviewImage(null);
    setImages([]);
    setTitle("");
    setDescription("");
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

              <div className="flex flex-col gap-3">
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

              {/* Множественная загрузка изображений */}
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
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Введите заголовок"
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Описание новости
                  </p>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                onClick={handleCreate}
                className="bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300 mt-4"
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

export default NewsEdit;
