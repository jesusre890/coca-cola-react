import './index.css';
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer";
import BlackFriday from "./componentes/BlackFriday"


function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <BlackFriday/>
      <Footer/>
    </div>
  );
}

export default App;
