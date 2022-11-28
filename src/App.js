import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Navbar/Navbar';
import About from './components/About/About';
import NotFound from './NotFound';
import Footer from './components/Footer/Footer';
import CourseDetails from './components/CourseDetails/CourseDetails';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import{ Admin, Adminmain, Adminmodify} from './components/Admin/Admin';
import AcademicRes from './components/AcademicRes/AcademicRes';
import Events from './components/Events/Events';
import Instructors from './components/Instructors/Instructors';
import Forms from './components/Forms/Forms';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses/course_resource" element={<AcademicRes />} />
            <Route path="/courses/events" element={<Events />} />
            <Route path="/courses/instructors" element={<Instructors />} />
            <Route path="/courses/course" element={<Courses />} />
            <Route path="/courses/forms" element={<Forms />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses/:id" element={<CourseDetails />}/>
            <Route path="/adminadd" element={<Admin />} />
            <Route path="/admin" element={<Adminmain />} />
            <Route path="/adminmodify" element={<Adminmodify />} />
            {/* <Route path="/courses/:id" element={<CourseDetails />}/> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
