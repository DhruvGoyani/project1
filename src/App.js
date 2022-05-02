import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';
import Department from './Container/Department/Department';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appointment from './Container/Appointment/Appointment';
import Auth from './Container/Auth/Auth';
import Counter from './Container/Counter/Counter';


function App() {
  return (
    <>
    <Header />
    <Switch>
      {/* <Route exact path={"/"} component={Home} />
      <Route exact path={"/Department"} component={Department} /> */}
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/department"} component={Department} />
      <Route exact path={"/doctors"} component={Doctors} />
      <Route exact path={"/about"} component={About} />
      <Route exact path={"/contact"} component={Contact} />
      <Route exact path={"/appointment"} component={Appointment} />
      <Route exact path={"/auth"} component={Auth} />
     </Switch>
    <Footer />
    <Counter />                
    </>
  );  
}
 
export default App;
