import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import './fonts/font-awesome-4.7.0'
// import css
import './assets/css/font-awesome.min.css'
// import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './assets/css/owl.carousel.css'
import './assets/css/owl.theme.default.min.css'








import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import'./Pages/Login/Login.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter className=''>
    <Header />
    <div className="Parent">
      <Routes>
        <Route path="/" >
        <Route index element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} ></Route>
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
