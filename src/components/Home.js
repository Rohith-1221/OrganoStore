import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard';
import Blog from './Blog';
import Contact from './Contact';
import CardList from './cart/CardList';
import Testimonials from './Testimonials';
import Details from './Details';
// import About from './About';


const Home=({isLoggedin})=>{
    const [isLogin,setIsloggedin]=useState(false)
 
  const handleLogout=()=>{
    setIsloggedin(false)
  }

  const navigate=useNavigate()
   
    if(!isLoggedin){
        navigate('/login')
    }


  

  return (
    <>
    <Dashboard  handleLogout={handleLogout}/>
    <Blog/>
    <Details/>
    <CardList/>
    {/* <About/> */}
    <Testimonials/>
    <Contact/>
</>
  );
}
export default Home;