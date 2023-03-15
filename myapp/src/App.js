import "./App.css";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="Saludos CoderHouse" />} />
            <Route exact path="/categoria/:category" element={<ItemListContainer />} />
            <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path='/checkout' element = {<Checkout/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
