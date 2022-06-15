
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Modaal from './components/MOdal/Modaal';
import ProductInfo from './Pages/ProductInfo/ProductInfo';
import Profile from './Pages/Profile/Profile';

function App() {
  return (

     <BrowserRouter>
     <Header/>
    <div className="App">

       <Routes>

           <Route path='/'  element={<Profile/>} />

            <Route path='/productinfo' element={<ProductInfo/>}/>

       </Routes>
          

    </div>

    </BrowserRouter>
  );
}

export default App;
