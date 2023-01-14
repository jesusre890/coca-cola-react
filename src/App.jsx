import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./componentes/Footer";
import ItemListContainer from './componentes/ItemListContainter';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import NavBar from "./componentes/NavBar";
import BlackFriday from "./componentes/BlackFriday"
import Error404 from './componentes/Error404';
import CartContextProvider from './componentes/context/CartContext';
import Cart from "./componentes/Cart";
import Checkout from './componentes/Checkout';


function App() {
  return (
    <CartContextProvider>
          <div className='container-fluid'>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                <Route path={"/cart"} element={<Cart />} />
                <Route path={"/checkout"} element={<Checkout />} />
                <Route path={"*"} element={<Error404 />} />
              </Routes>
              <BlackFriday />
              <Footer />
            </BrowserRouter>
          </div>
    </CartContextProvider>
  );
}

export default App;
