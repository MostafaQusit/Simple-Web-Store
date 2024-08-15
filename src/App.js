import { Route, Routes } from 'react-router-dom'

import Navbar      from './components/Navbar'
import ProductList from './components/ProductList'
import Details     from './components/Details'
import Contact     from './components/Contact'
import About       from './components/About'
import Footer      from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/details/:id'  element={<Details/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/about'  element={<About/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App