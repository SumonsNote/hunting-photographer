import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import About from './Pages/About';
import Navbar from './ShareFiles/Navbar';
import Login from './Authentication/Login';
import Services from './Pages/Services';
import Checkout from './Pages/Checkout';
import RequiredAuth from './Pages/RequiredAuth';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth><Checkout></Checkout></RequiredAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
