import Banner from "../../components/Banner/Banner";
import FeaturedBuildingMixes from "../../components/home/FeaturedBuildingMixes/FeaturedBuildingMixes";
import FeaturedBuildingMaterials from "../../components/home/FeaturedBuildingMaterials/FeaturedBuildingMaterials";
import AboutCompany from "../../components/home/AboutCompany/AboutCompany";
import CompanyContacts from "../../components/home/CompanyContacts/CompanyContacts";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto px-4">
        <Banner />
        <FeaturedBuildingMixes />
        <FeaturedBuildingMaterials />
        <AboutCompany />
        <CompanyContacts />
      </div>
    </div>
  );
};

export default Home;
