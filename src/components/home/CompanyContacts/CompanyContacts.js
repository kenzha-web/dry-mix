import Heading from "../Products/Heading";
import {memo} from "react";

const CompanyContacts = () => {
  return (
    <div className="max-w-container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm">
        <Heading heading="Контакты" />
        <div className="divide-y divide-gray-300 text-lg">
          <div className="flex items-center py-4">
            <span className="text-gray-600 text-sm sm:text-base">Телефон:</span>
            <span className="text-gray-800 ml-2 text-sm sm:text-base">+7 (XXX) XXX-XX-XX</span>
          </div>
          <div className="flex items-center py-4">
            <span className="text-gray-600 text-sm sm:text-base">E-mail:</span>
            <span className="text-gray-800 ml-2 text-sm sm:text-base">info@yourcompany.com</span>
          </div>
          <div className="flex items-center py-4">
            <span className="text-gray-600 text-sm sm:text-base">Адрес:</span>
            <span className="text-gray-800 ml-2 text-sm sm:text-base">г. Усть-Каменогорск, ул. Пример, д. 1</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11910.785236129824!2d82.61939743677712!3d49.94885502782861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42f77ac16271ab33%3A0xa5d6f9b0bdc4a7f1!2z0J7QtNC90Y_QvdC10LLRgdC60LjQuSDRg9C7LiDQktC10YDRgdGC0L7QvdC40Y8g0KfQtdGF0LDQutCw0Y8g0KHQsNC70LDRgdC60LDRjyDQvNC40YAh!5e0!3m2!1sru!2skz!4v1697621447905!5m2!1sru!2skz"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default memo(CompanyContacts);
