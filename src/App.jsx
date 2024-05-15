import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import WomenPage from "./components/WomenPage";
import MenPage from "./components/MenPage";
import KidsPage from "./components/KidsPage";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import OrderCompletedpage from "./components/OrderCompletedpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/women" element={<WomenPage/>}/>
        <Route path="/men" element={<MenPage/>}/>
        <Route path="/kids" element={<KidsPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/order" element={<OrderCompletedpage/>}/>
        <Route path="/product" element={<ProductPage/>}>
          <Route path=":productId" element={<ProductPage/>}/>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
