import React, {useState} from "react";
import {Link} from "react-router-dom";

const CategoryEdit = () => {
  const [category, setCategory] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleMessages = (e) => {
    setCategory(e.target.value);
    setErrMessages("");
  };

  const handleCreate = (e) => {
    if (!category) {
      setErrMessages("Создайте категорию");
    }
    if (category) {
      setSuccessMsg(
        `Ваша категория была успешно создана.`
      );
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
                className="w-ful h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Создать продукт
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-full flex flex-col justify-start">
            <div className="px-6 py-4 w-full h-full flex flex-col justify-start">
              <h1 className="font-titleFont text-center underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 pt-10">
                Создать категорию
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Категория
                  </p>
                  <input
                    onChange={handleMessages}
                    value={category}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="пр. Штукатурка"
                  />
                  {errMessages && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errMessages}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleCreate}
                  className={`${"bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer"} w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Создать категорию
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>

  );
}

export default CategoryEdit;
