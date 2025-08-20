import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectwrapper from './pages/UserProtectwrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectwrapper from './pages/CaptainProtectwrapper'
import Riding from './pages/Riding'
import ConfirmRiding from './components/ConfirmRiding'


const App = () => {
  return (
    <div>
        <Routes>    
        <Route path='/' element={<Start/>}/>
            <Route path='/Login' element={<UserLogin/>}/>
            <Route path='/Signin' element={<UserSignup/>}/>
            <Route path='/Captain-login' element={<CaptainLogin/>}/>
            <Route path='/Captain-signin' element={<CaptainSignup/>}/>
            <Route path='/riding' element={<Riding/>}/>
            <Route path='/Captain-riding' element={<ConfirmRiding/>}/>

            <Route path= '/home' element={
             <UserProtectwrapper> 
              <Home/> 
             </UserProtectwrapper>}></Route>

             <Route path="/user/logout" element={
              <UserProtectwrapper>
                <UserLogout/>
              </UserProtectwrapper>
            }/>

            <Route path='/captain-home' element={
              <CaptainProtectwrapper>
                <CaptainHome/>
              </CaptainProtectwrapper>
            }/>
        </Routes>
    </div>
  )
}

export default App