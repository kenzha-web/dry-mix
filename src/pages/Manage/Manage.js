import {memo, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import AdminNavigation from "../../components/Admin/AdminNavigation";
import {UseRedirectLoggedOutUser} from "../../hooks/useRedirectLoggedOutUser";

const Manage = () => {
  UseRedirectLoggedOutUser("/");
  const role = "admin";
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    } else {
      setPrevLocation("Home");
    }
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Админ панель" prevLocation={prevLocation} />
      <div className="pb-10">
        <AdminNavigation />
      </div>
    </div>
  );
};

export default memo(Manage);
