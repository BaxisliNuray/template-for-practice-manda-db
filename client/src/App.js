import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Courses from './pages/Courses';
import Hero from './pages/Hero';
import Video from './pages/Video';
import Employees from './pages/Empoyees';


function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Video/>
      <Courses/>
      <Employees/>
      <Footer />
    </>
  );
}

export default App;
