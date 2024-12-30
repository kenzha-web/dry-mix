import { useEffect, useState, useRef, Fragment, memo } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import { useDispatch, useSelector } from "react-redux";
import { logout, RESET } from "../../../store/features/auth/authSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();

  const products = useSelector((state) => state.orebiReducer.products);
  const user = useSelector((state) => state.auth.user);

  // Обновлённая функция выхода
  const logoutUser = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/signin");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  useEffect(() => {
    const ResponsiveMenu = () => {
      if (window.innerWidth < 961) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
    return () => {
      window.removeEventListener("resize", ResponsiveMenu);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowUser(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-20 bg-headerColor sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          {/* Кнопка гамбургера (для мобильных) */}
          <div className="lg:hidden">
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="text-white cursor-pointer w-10 h-8 absolute top-6 left-4 z-50"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img className="w-36 mb-6" src={logoLight} alt="logo" />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          key={item._id}
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>

          {/* Логотип */}
          <div className="flex justify-center w-full lg:w-auto">
            <Link to="/">
              <div className="w-36">
                <Image className="object-cover" imgSrc={logoLight} />
              </div>
            </Link>
          </div>

          {/* Меню (для десктопа) */}
          {showMenu && (
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex items-center justify-center w-full z-50 p-0 gap-4"
            >
              {navBarList.map(({ _id, title, link }, index) => (
                <Fragment key={_id}>
                  <NavLink
                    key={_id}
                    className={({ isActive }) => `
                      flex font-normal hover:font-bold justify-center items-center px-4 text-base text-white
                      hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#c3cdcd]
                      ${
                      isActive
                        ? "text-[#bdb7b9] font-bold underline underline-offset-[4px] decoration-[1px]"
                        : ""
                    }
                      whitespace-nowrap
                    `}
                    to={link}
                    state={{ data: location.pathname.split("/")[1] }}
                  >
                    <li>{title}</li>
                  </NavLink>
                  {index !== navBarList.length - 1 && <span className="text-white">|</span>}
                </Fragment>
              ))}
            </motion.ul>
          )}

          {/* Блок иконок (корзина, юзер) */}
          <div className="flex items-center gap-4">
            <div
              ref={ref}
              className="relative flex items-center gap-3 cursor-pointer"
              onClick={() => setShowUser(!showUser)}
            >
              {/* Корзина */}
              <Link to="/basket" onClick={(e) => e.stopPropagation()}>
                <div className="relative cursor-pointer">
                  <MdAddShoppingCart
                    color={"#ffffff"}
                    size={28}
                    className="hover:brightness-110 hover:scale-110 transition-all duration-300"
                  />
                  <span className="absolute top-0 right-0 w-4 h-4 text-xs flex items-center justify-center bg-primeColor text-white rounded-full">
                    {products.length > 0 ? products.length : 0}
                  </span>
                </div>
              </Link>

              {/* Иконка пользователя */}
              <div className="flex items-center gap-1 cursor-pointer">
                <FaRegUserCircle
                  color={"#ffffff"}
                  size={24}
                  className="hover:brightness-110 hover:scale-110 transition-all duration-300"
                />
                <FaCaretDown
                  color={"#ffffff"}
                  className="hover:brightness-110 hover:scale-110 transition-all duration-300 mt-1"
                />
              </div>

              {/* Выпадающее меню пользователя */}
              {showUser && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute z-50 bg-primeColor w-64 text-[#767676] h-auto p-4 pb-6 ${
                    window.innerWidth < 768 ? "top-12 right-4" : "top-8 left-[-100px]"
                  }`}
                >
                  {!user ? (
                    <>
                      <Link to="/signin">
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                          Авторизоваться
                        </li>
                      </Link>
                      <Link to="/signup">
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                          Зарегистрироваться
                        </li>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/basket">
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                          Корзина
                        </li>
                      </Link>
                      <Link to="/contact">
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                          Оставить заявку
                        </li>
                      </Link>
                      {user?.role === "admin" && (
                        <Link to="/manage">
                          <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                            Админ панель
                          </li>
                        </Link>
                      )}
                      <li
                        onClick={logoutUser}
                        className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                      >
                        Выйти
                      </li>
                    </>
                  )}
                </motion.ul>
              )}
            </div>
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default memo(Header);
