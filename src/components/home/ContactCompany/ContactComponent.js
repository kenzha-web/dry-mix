import Heading from "../Products/Heading";
import {memo} from "react";

const ContactComponent = () => {
  const whatsappLink = "https://wa.me/7XXXXXXXXXX";

  return (
    <div className="max-w-container mx-auto">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="divide-y divide-gray-300 text-lg">
          <div className="flex items-center py-4">
            <span className="text-gray-600 text-sm sm:text-base">Телефон:</span>
            <div className="flex items-center gap-x-4 ml-2">
              <span className="text-gray-800 text-sm sm:text-base">+7 (XXX) XXX-XX-XX</span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm sm:text-base"
              >
                Напишите нам в WhatsApp
              </a>
            </div>
          </div>
          <div className="flex items-center py-4">
            <span className="text-gray-600 text-sm sm:text-base">E-mail:</span>
            <span className="text-gray-800 ml-2 text-sm sm:text-base">info@yourcompany.com</span>
          </div>
          <div className="flex items-center py-4">
            <span className="text-gray-600 text-sm sm:text-base">Адрес:</span>
            <span className="text-gray-800 ml-2 text-sm sm:text-base">г. Усть-Каменогорск, ул. Серикбаева, д. 49а</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d949.445371979036!2d82.5795833!3d49.9569438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42eb459d447e0125%3A0x8dc594fc1224c67!2zWHg1SCU1R0g0LHRg9GF0L7RgdC40LvRjNC60LAg0YPQtg!5e0!3m2!1sru!2skz!4v1697621447905!5m2!1sru!2skz"
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

export default memo(ContactComponent);
