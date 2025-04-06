import './index.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {
  return (
    <>
    <Navbar/>
    <section id="home"><Home/></section>
    <section id="about"><About /></section>
    <section id="skills"><Skills /></section>
    <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
