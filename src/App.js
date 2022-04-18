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
import Register from './Authentication/Register';
import Page404 from './NotFoundPage/Page404';
import Footer from './ShareFiles/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='mb-5'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/checkout' element={
            <RequiredAuth><Checkout></Checkout></RequiredAuth>
          }></Route>
          <Route path='*' element={<Page404></Page404>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
