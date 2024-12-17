import {useState} from "react";
import CategoryEdit from "./CategoryEdit";
import ProductEdit from "./ProductEdit";
import NewsEdit from "./NewsEdit";

const AdminNavigation = () => {
  const [activeTab, setActiveTab] = useState("");

  const tabs = ["Категория", "Продукт", "Новости"];

  return (
    <>
      <div className="flex justify-between items-center mt-4 md:mt-6 border-b-4 border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 md:pb-4 text-sm md:text-xl font-bold ${
              activeTab === tab
                ? "text-greenPrimeColor border-b-4 border-greenPrimeColor"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === "Категория" && (<CategoryEdit />)}
      {activeTab === "Продукт" && (<ProductEdit />)}
      {activeTab === "Новости" && (<NewsEdit />)}
    </>
  )
}

export default AdminNavigation;
