import {memo, useEffect, useState} from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import { logoLight } from "../../assets/images";
import {FaGoogle} from "react-icons/fa";
import {toast} from "react-toastify";
import {login} from "../../store/features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const { isLoggedIn, isError } = useSelector(state => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if(!email || !password){
      return toast.error("All fields are required");
    }

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, isError, navigate]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-greenPrimeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Войдите в систему
            </h1>
            <p className="text-base">
              Инновационные строительные материалы для вашего успеха.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Начать просто
              </span>
              <br />
              Доступ к инновационным материалам и технологиям в один клик.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Ваши возможности
              </span>
              <br />
              Прочные, долговечные и экологичные строительные решения.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Нам доверяют
              </span>
              <br />
              Наши материалы выбирают профессионалы, ценящие качество и надежность.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2 h-full">
        <form onSubmit={handleLogin} className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
          <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
              С возвращением
            </h1>
            <div className="flex flex-col gap-3">
              {/* Email */}
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Электронная почта
                </p>
                <input
                  name="email"
                  onChange={handleInputChange}
                  value={email}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="email"
                  placeholder="example@workemail.com"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Пароль
                </p>
                <input
                  name="password"
                  onChange={handleInputChange}
                  value={password}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="password"
                  placeholder="Create password"
                />
              </div>

              <button
                onClick={handleLogin}
                className="bg-greenPrimeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
              >
                Войти
              </button>
              <p className="text-sm text-center font-titleFont font-medium">
                У вас нет учетной записи?{" "}
                <Link to="/signup">
                  <span className="hover:text-greenPrimeColor duration-300">
                    Зарегистрироваться
                  </span>
                </Link>
              </p>
              <div className="flex items-center mt-2 mb-2">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-4 text-sm text-center font-titleFont font-medium">
                    ИЛИ
                  </span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <button className="flex items-center justify-center gap-2 bg-red-500 text-white p-3 px-5 rounded-md">
                <FaGoogle />
                <p className="text-sm">Продолжить с Google</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(SignIn);
