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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses/:id" element={<CourseDetails />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
