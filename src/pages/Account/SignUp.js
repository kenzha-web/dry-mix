import {memo, useEffect, useState} from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import { logoLight } from "../../assets/images";
import { FaGoogle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {register, RESET} from "../../store/features/auth/authSlice";
import {Loader} from "../../components/designLayouts/Loader";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { firstName, lastName, email, password, confirmPassword } = formData;
  const { isLoading, isSuccess, isLoggedIn, message, isError } = useSelector(state => state.auth);
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleRegister = (e) => {
    e.preventDefault();

    if(!firstName || !lastName || !email || !password || !confirmPassword){
      return toast.error("All fields are required");
    }

    if(password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }

    if(password !== confirmPassword) {
      return toast.error("Password does not match!");
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
    }

    dispatch(register(userData));
  };

  useEffect(() => {
    if(isSuccess && isLoggedIn) {
      navigate("/signin");
    }

    if(isError) {
      toast.error(message || "Registration failed");
    }

    return () => {
      dispatch(RESET());
    }
  }, [dispatch, isLoggedIn, isSuccess, isError, message, navigate])

  return (
    <>
      {isLoading && <Loader />}
      <div className="w-full h-screen flex items-center justify-start">
        <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
          <div className="w-[450px] h-full bg-greenPrimeColor px-10 flex flex-col gap-6 justify-center">
            <Link to="/">
              <img src={logoLight} alt="logoImg" className="w-28" />
            </Link>
            <div className="flex flex-col gap-1 -mt-1">
              <h1 className="font-titleFont text-xl font-medium">
                Зарегистрируйтесь в системе
              </h1>
              <p className="text-base">
                Станьте частью сообщества, выбирающего экологичные и качественные решения!
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
        <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
          <form onSubmit={handleRegister} className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Создать учетную запись
              </h1>
              <div className="flex flex-col gap-3">

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Имя
                  </p>
                  <input
                    name="firstName"
                    onChange={handleInputChange}
                    value={firstName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="пр. Иван"
                  />
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Фамилия
                  </p>
                  <input
                    name="lastName"
                    onChange={handleInputChange}
                    value={lastName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="пр. Иванов"
                  />
                </div>

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
                    placeholder="Создайте пароль"
                  />
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Подтвердите пароль
                  </p>
                  <input
                    name="confirmPassword"
                    onChange={handleInputChange}
                    value={confirmPassword}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Подтвердите пароль"
                  />
                </div>

                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer accent-greenPrimeColor"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    Я согласен с СтройСмеси{" "}
                    <span className="text-blue-500">Terms of Service </span>и{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div>
                <button
                  onClick={handleRegister}
                  className={`${
                    checked
                      ? "bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Создать аккаунт
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  У вас есть учетная запись?{" "}
                  <Link to="/signin">
                  <span className="hover:text-greenPrimeColor duration-300">
                    Войдите
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
    </>
  );
};

export default memo(SignUp);
