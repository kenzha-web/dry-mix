import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";

const Footer = () => {
  return (
    <div className="w-full bg-headerColor py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title=" Подробнее о производстве" />
          <div className="flex flex-col gap-6">
            <p className="text-base text-white w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center gap-2">
              <a
                href="https://www.youtube.com/@reactjsBD"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/noorjsdivs"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.facebook.com/Noorlalu143/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Каталог" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Производство" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Информация" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Наши контакты" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
            <li className="font-titleFont text-base text-white hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Lorem
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
