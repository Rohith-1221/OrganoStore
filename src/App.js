import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import  './App.css';
import LoginForm from './components/LoginForm';
import { useState } from 'react';
import Home from './components/Home';
import Register from './components/Register';
import Display from './components/Display';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Cart from "./components/cart/Cart";
import CardList from './components/cart/CardList';
import Testinomials from './components/Testinomials';
import Profile from './components/Profile';
// import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedin,setIsloggedin]=useState(false)
  const handleLogin=()=>{
    setIsloggedin(true)
  }
  
  // const handleLogout=()=>{
  //   setIsloggedin(false)
  // }
  return (
   <>
      <Router>
      {/* <Dashboard  handleLogout={handleLogout}/> */}
          <Routes>
              <Route path='/' element={<Display setLoggedin={setIsloggedin}/>}/>
              <Route path='/login' element={<LoginForm handleLogin={handleLogin}/>}/>
              <Route path='/Home' element={<Home isLoggedin={isLoggedin}/>}/>
              <Route path='/register' element={<Register setLoggedin={setIsloggedin}/>}/>
              <Route path='/Products' element={<CardList/>}/>
              <Route path='/Blog' element={<Blog/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/Testinomials' element={<Testinomials/>}/>
              <Route path='/Profile' element={<Profile/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
