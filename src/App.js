
import style from './App.css'
import SingleProductPage from './pages/SingleProductPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import Categories from './pages/Categories';


function App() {
  return (
    
   <div>
    <Header/>
    <Routes>
        <Route path='/MainPage' element={<MainPage/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/product/:product_id' element={<SingleProductPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
<Footer/>
   </div>
  );
}

export default App;
