import s from './App.css'
// import SingleProductPage from './pages/SingleProductPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import { Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';

import CategoryProductsPage from './pages/CategoryProductsPage';
import AllSales from './pages/AllSales';
import SingleProduct from './components/SingleProduct';
import BasketPage from './pages/BasketPage';




function App() {
  return (
    
   <div >
    <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/categories/all' element={<CategoriesPage/>} type='categories'/>
        <Route path='/products/all' element={<ProductsPage/>} type="allProducts"/>
        <Route path='/allSales' element={<AllSales/>} type="allSales"/>
        <Route path='/categories/:id' element={<CategoryProductsPage/>} />
        <Route path='/emptyBasket' element={<BasketPage/>} />
        <Route path='/product/:product_id' element={<SingleProduct/>}/> 

        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      
    <Footer/>
   </div>
  );
}

export default App;
