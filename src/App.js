
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
import SignIn from './components/Sign/In';
import SignUp from './components/Sign/Up';

 
function App() {
  return (
    <>

    <Router>

      <Switch>
          <Route exact path="/Sign-In">
              <SignIn/>
            </Route>
            
            <Route exact path="/Sign-Up">
              <SignUp/>
            </Route>
            
            <Route  path="/">
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

        <Footer/>

        </Route>

      </Switch>
    
    </Router>
    </>

  );
}

export default App;
