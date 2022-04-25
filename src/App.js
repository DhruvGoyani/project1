import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';
import Department from './Container/Department/Department';

function App() {
  return (
    <>
    <Header />
    <switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/Department"} component={Department} />
    </switch>
    <Footer />
    </>
  );
}

export default App;
