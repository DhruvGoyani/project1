import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Container/Home/Home";
import Department from "./Container/Department/Department";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Doctors from "./Container/Doctors/Doctors";
import About from "./Container/About/About";
import Contact from "./Container/Contact/Contact";
import Appointment from "./Container/Appointment/Appointment";
import Counter from "./Container/Counter/Counter";
import Medicines from "./Container/Medicines/Medicines";
import Auth1 from "./Container/Auth/Auth1";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import ListAppointment from "./Container/Appointment/ListAppointment";
import { Provider } from "react-redux";
import { store } from "./Saga/Store";
import { TheameProvider } from "./Context/Reducer/ThemeContext";
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <>
      <SnackbarProvider  maxSnack={3} >
      <Provider store={store}>
        <TheameProvider>
          <Header />
          <Switch>
            <PublicRoute exact path={"/"} component={Home} />
            <PublicRoute exact path={"/department"} component={Department} />
            <PublicRoute exact path={"/doctors"} component={Doctors} />
            <PublicRoute exact path={"/about"} component={About} />
            <PublicRoute exact path={"/contact"} component={Contact} />
            <PrivateRoute exact path={"/appointment"} component={Appointment} />
            <PrivateRoute
              exact
              path={"/Listappointment"}
              component={ListAppointment}
            />
            <PublicRoute exact path={"/medicines"} component={Medicines} />
            <PublicRoute
              restricted={true}
              exact
              path={"/auth1"}
              component={Auth1}
            />
          </Switch>
          <Footer />
        </TheameProvider>
      </Provider>
      </SnackbarProvider>
      {/* <Counter />                 */}
    </>
  );
}

export default App;
