import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Guest/Home'
import Header from './components/Guest/Header'
import Error from './pages/Guest/Error'
import Cart from './pages/Guest/Cart'
import Status from './pages/Guest/Status'
import Orders from './pages/Guest/Orders'
import OrderDetail from './pages/Guest/OrderDetail'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/cart' element = {<Cart/>}></Route>
        <Route path='/status' element = {<Status/>}></Route>
        <Route path='/orders' element = {<Orders/>}></Route>
        <Route path='/orders/:id' element = {<OrderDetail/>}></Route>
        <Route path='/*' element = {<Error/>}></Route>
      </Routes>
    </>
  )
}

export default App
