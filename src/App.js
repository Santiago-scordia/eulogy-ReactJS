import './App.css';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:idCategory' element={<ItemListContainer />} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
