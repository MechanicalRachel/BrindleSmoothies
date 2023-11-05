import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router basename="/brindle-smoothies-react">
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/brindle-smoothies-react">
              <Home />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>          
        </div> 
        <Footer />       
      </div>
    </Router>
  );
}

export default App;
