import {HashRouter, Routes, Route, Outlet} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Basket from "./pages/Basket/Basket";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Catalog from "./pages/Catalog/Catalog";
import Manage from "./pages/Manage/Manage";
import NewsPage from "./pages/News/NewsPage";
import NewsDetails from "./pages/NewsDetails/NewsDetails";

const Layout = () => {
  return (
    <div>
      <Header />
      <SpecialCase />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/product/:_id" element={<ProductDetails />} />
          <Route path="/news/:_id" element={<NewsDetails />} />
          <Route path="/cart" element={<Basket />} />
          <Route path="/manage" element={<Manage />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
