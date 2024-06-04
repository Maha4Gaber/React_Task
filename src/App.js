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
// import './Pages/Login/Login.css';
import Main from './Dashbourd/Main/Main.jsx';
import AddAdmin from './Dashbourd/AddAdmin/AddAdmin.jsx';
import AddDoctor from './Dashbourd/AddDoctor/AddDoctor.jsx';
import AddNews from './Dashbourd/AddNews/AddNews.jsx';
import ShowUsers from './Dashbourd/ShowUsers/ShowUsers.jsx';
import ShowDoctors from './Dashbourd/ShowDoctors/ShowDoctors.jsx';
import ShowNews from './Dashbourd/ShowNews/ShowNews.jsx';
import ShowApp from './Dashbourd/ShowApp/ShowApp.jsx';
import Doctor from './Pages/Doctors/Doctor.jsx';
import Appointment from './Pages/Appointment/Appointment.jsx';
import About from './Pages/About/About.jsx';
import News from './Pages/News/News.jsx';


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
        

        <Route path='/doctor' element={<Doctor />} ></Route>
        <Route path='/appointment' element={<Appointment />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/appointment' element={<Appointment />} ></Route>
        <Route path='/news' element={<News />} ></Route>
        <Route path='/login' element={<Login />} ></Route>

        <Route path="/dashboard" >
          <Route index element={<Main />} />
          <Route path='addadmin' element={<AddAdmin />} />
          <Route path='adddoctor' element={<AddDoctor />} />
          <Route path='addnews' element={<AddNews />} />
          <Route path='showusers' element={<ShowUsers />} />
          <Route path='showdoctor' element={<ShowDoctors />} />
          <Route path='shoewnews' element={<ShowNews />} />
          <Route path='showapp' element={<ShowApp />} />
        </Route>
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
