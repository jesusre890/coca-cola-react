import './index.css';
import Footer from "./componentes/Footer";
import ItemListContainer from './componentes/ItemListContainter';
import NavBar from "./componentes/NavBar";
import BlackFriday from "./componentes/BlackFriday"


function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <ItemListContainer greeting={"No se encontraron productos!"}/>
      <BlackFriday/>
      <Footer/>
    </div>
  );
}

export default App;
