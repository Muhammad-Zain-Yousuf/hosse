import {BrowserRouter as Router, Route, Routes, Link, UseHistory} from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Navbar/Navbar';
import About from './components/About/About';
import NotFound from './NotFound';
import Footer from './components/Footer/Footer';
// import CourseDetails from './components/CourseDetails/CourseDetails';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import{ Admin, Adminmain, Adminmodify} from './components/Admin/Admin';
import AcademicRes from './components/AcademicRes/AcademicRes';
import Events from './components/Events/Events';
import Instructors from './components/Instructors/Instructors';
import Forms from './components/Forms/Forms';
import Courses from './components/Courses/Courses';
import Dashboard from './components/Login/Dashboard';
import Suggestion from './components/Suggestion/Suggestion';

import { GlobalStateProvider } from './components/Login/Login';





// function App() {
const App = () => (

  <GlobalStateProvider>

  {/* return ( */}
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses/course_resource" element={<AcademicRes />} />
            <Route path="/courses/courses" element={<Events />} />
            <Route path="/courses/instructors" element={<Instructors />} />
            <Route path="/courses/events" element={<Courses />} />
            <Route path="/courses/forms" element={<Forms />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminadd" element={<Admin />} />
            <Route path="/admin" element={<Adminmain />} />
            <Route path="/adminmodify" element={<Adminmodify />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses/suggestion" element={<Suggestion />} />
            {/* <Route path="/courses/:id" element={<CourseDetails />}/> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  {/* ) */}
  </GlobalStateProvider>
);
//{

export default App;
// export { useGlobalState };
