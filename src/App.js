import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Loginsignup from './Pages/Loginsignup'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import Kid_banner from './Components/Assets/banner_kids.png'
function App () {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Navigate to='/shop'/>}/>
            <Route path='/shop'  element={<Shop />} index/>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} />
            <Route
              path='/womens'
              element={<ShopCategory banner={women_banner} category='women' />}
            />
            <Route path='/kids' element={<ShopCategory banner={Kid_banner} category='kid' />} />
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Loginsignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
