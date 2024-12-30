import {memo} from "react";
import {productFeatureTitle} from "../../../constants";

const ProductFeature = ({ productInfo }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-md shadow-md mt-4 flex flex-col gap-4 mb-4">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
        Характеристики
      </h3>

      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-600">
          <span className="font-medium text-gray-800">Статус: </span>
          {productInfo.status || "—"}
        </p>
        <p className="text-base text-gray-600">
          <span className="font-medium text-gray-800">Цена: </span>
          {productInfo.price ? `${productInfo.price} тг` : "—"}
        </p>
        <p className="text-base text-gray-600">
          <span className="font-medium text-gray-800">В наличии: </span>
          {productInfo.inStock ? "Да" : "Нет"}
        </p>
        {productInfo.category?.name && (
          <p className="text-base text-gray-600">
            <span className="font-medium text-gray-800">Категория: </span>
            {productInfo.category.name}
          </p>
        )}
      </div>

      {productInfo.specifications && (
        <div className="mt-2">
          <h4 className="text-lg md:text-xl font-semibold mb-2">
            Технические данные
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base text-gray-600">
            {Object.entries(productInfo.specifications).map(([key, value]) => (
              <li key={key}>
                        <span className="font-medium text-gray-800">
                          {productFeatureTitle[key]}:
                        </span>{" "}
                {String(value)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default memo(ProductFeature);
