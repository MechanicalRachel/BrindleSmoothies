import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import Contact from './Components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter hashType="slash">
      <div className="App">
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>    
        <Footer />       
      </div>
    </BrowserRouter>
  );
}

export default App;
