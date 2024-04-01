import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormResort from './components/FormResort'
import ListResort from './components/ListResort'
import LoginOwner from './components/LoginOwner'
import LoginUser from './components/LoginUser'
import SignUpOwner from './components/SignUpOwner'
import SignUpUser from './components/SignUpUser'
import Home from './components'
import ContactUs from './components/ContactUs'
import Resort from './components/Resort'
import Order from './components/Order'
import Owner from './components/Owner'
import Account from './components/Account'
import NavBar from './components/NavBar'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginUser' element={<LoginUser />} />
          <Route path='/signUpUser' element={<SignUpUser />} />
          <Route path='/loginOwner' element={<LoginOwner />} />
          <Route path='/signUpOwner' element={<SignUpOwner />} />
          {/* <Route path='/user' element={<NavBar/>}> */}
          <Route path='/listResort' element={<ListResort />} />
          <Route path='/resort/:id' element={<Resort />} />
          <Route path='/resort' element={<Resort />} />
          <Route path='/account' element={<Account />} />
          {/* </Route> */}

          <Route path='/formResort' element={<FormResort />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/order' element={<Order />} />
          <Route path='/order/:id' element={<Order />} />
          <Route path='/owner' element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
