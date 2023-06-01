
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoToTop from './components/GoToTop/GoToTop';
import Shop from './components/Shop/Shop';
import Seller from './fakeData2/Seller';
import News from './components/News/News';

function App() {
  return (
      <BrowserRouter>
      <>
          <Header></Header>
          <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/seller" element={<Seller/>}/>
          <Route path="/news" element={<News/>}/>
              
              

          </Routes>
          <Footer></Footer>
          <GoToTop></GoToTop>
      
      </>
      </BrowserRouter>
   
  );
}

export default App;
