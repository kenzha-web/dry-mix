import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ContactComponent from "../../components/home/ContactCompany/ContactComponent";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "Главная");
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Контакты" prevLocation={prevLocation} />
      <ContactComponent />
    </div>
  );
};

export default memo(Contact);
