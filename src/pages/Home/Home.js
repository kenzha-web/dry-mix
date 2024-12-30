import Banner from "../../components/Banner/Banner";
import FeaturedBuildingMixes from "../../components/home/FeaturedBuildingMixes/FeaturedBuildingMixes";
import AboutCompany from "../../components/home/AboutCompany/AboutCompany";
import ContactComponent from "../../components/home/ContactCompany/ContactComponent";
import {memo} from "react";
import Heading from "../../components/home/Products/Heading";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto px-4">
        <Banner />
        <FeaturedBuildingMixes />
        {/*<FeaturedBuildingMaterials />*/}
        <AboutCompany />
        <Heading heading="Контакты" />
        <ContactComponent />
      </div>
    </div>
  );
};

export default memo(Home);
