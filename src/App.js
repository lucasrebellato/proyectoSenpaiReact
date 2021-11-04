
import './App.css';
import PreHeader from './components/preHeader'
import Header from './components/Header'
import Index from './components/Main/Index'
import Shop from './components/Main/Shop'
import Contact from './components/Main/Contact'
import About from './components/Main/About'
import Ubication from './components/Main/Ubication'
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
function App() {
  return (
    <>

      <Router>

      <PreHeader/>

      <Header/>
      
      <Switch>
        
          <Route exact path="/">
            <Index />
          </Route>
        
         <Route path="/Tienda">
            <Shop />
          </Route>
        
          <Route path="/Ubicacion">
            <Ubication />
          </Route>
        
          <Route path="/Nosotros">
            <About />
          </Route>
        
          <Route path="/Contacto">
            <Contact />
          </Route>
        </Switch>
   
    </Router>

      

    <Footer/>

    </>

  );
}

export default App;
