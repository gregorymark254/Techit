import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Nav from './pages/Nav'
import Footer from './pages/Footer'
import ScrollToTop from './pages/ScrollToTop'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <main>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/blog" element={<Blog/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <ScrollToTop/>
      <Footer/>
    </main>
  );
}

export default App;
