import {HashRouter, Routes, Route, Outlet} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import {lazy, Suspense, useEffect} from "react";
import Home from "./pages/Home/Home";
import {ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {getLogInStatus} from "./store/features/auth/authSlice";

const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NewsPage = lazy(() => import("./pages/News/NewsPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails/ProductDetails"));
const NewsDetails = lazy(() => import("./pages/NewsDetails/NewsDetails"));
const Basket = lazy(() => import("./pages/Basket/Basket"));
const Manage = lazy(() => import("./pages/Manage/Manage"));
const SignUp = lazy(() => import("./pages/Account/SignUp"));
const SignIn = lazy(() => import("./pages/Account/SignIn"));

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogInStatus());
  }, [dispatch])

  return (
    <HashRouter>
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/product/:_id" element={<ProductDetails />} />
            <Route path="/news/:_id" element={<NewsDetails />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/manage" element={<Manage />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
