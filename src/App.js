import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ServicesSection from './Pages/ServicesSection';
import Blogs from './Pages/Blogs';
import About from './Pages/About';
import Navbar from './ShareFiles/Navbar';
import Login from './Authentication/Login';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/serviceSection' element={<ServicesSection></ServicesSection>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
