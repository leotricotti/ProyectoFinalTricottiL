import { NavBar } from "./screens/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../src/screens/HomePage/HomePage";
import { ItemListContainer } from "./screens/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./screens/ItemDetailContainer/ItemDetailContainer";
import { StoreAddressPage } from "../src/screens/StoreAddressPage/StoreAddressPage";
import { Cart } from "./screens/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { NavFooter } from "./components/NavFooter/NavFooter";
import { CartProvider } from "./components/Context/CartContext.jsx";
import { Login } from "./screens/Login/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/products" element={<ItemListContainer />} />
            <Route exact path="/:categoryId" element={<ItemListContainer />} />
            <Route
              exact
              path="/products/:detailId"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/stores" element={<StoreAddressPage />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        <NavFooter />
      </CartProvider>
    </BrowserRouter>
  );
};
