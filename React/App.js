
import './App.css';
import About from './Components/About';
import Card from './Components/Card';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  var age = 25;
  return (
    <div>
      
      {/* {age} */}
      {/* <h1 className='bg-success'>Heading</h1> */}
        {/* <hr/> */}
        {/* <Card title="card title 1" desc="this is card 1"/>
        <Card title="card title 2" desc="this is card 2"/>
        <Card title="card title 3" desc="this is card 3"/> */}
        
        <BrowserRouter>
      
              <Navbar login="kafl"/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About title="yes"/>}/>
                <Route path='/contact' element={<Contact/>}/>
                    {/* <Home/>
                    <About  />
                    <Contact/> */}
              </Routes>
      </BrowserRouter>



      {/* <Contact title="contact"/> */}
  <Footer/>
    </div>
  );
}

export default App;
