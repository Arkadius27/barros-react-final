import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

import './App.css'

function App() {

return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Shop />} />

        <Route path='/men' element= {<ShopCategory category='men' />} />
        <Route path='/women' element= {<ShopCategory category='women' />} />
        <Route path='/kids' element= {<ShopCategory category='kids' />} />

        <Route path='/product' element={<Product />} >
          <Route path=':productId' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart />} />

        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </Router>
  </>
)
}

export default App
