import { BrowserRouter, Switch , Route} from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Home/Shared/Footer/Footer';
import Header from './Components/Home/Shared/Header/Header';
import Login from '../src/Components/Login/Login'
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Team from './Components/Team/Team';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRouter/PrivateRoute';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter>
          <Header></Header>
           <Switch>
              <Route exact path="/">
                 <Home></Home>
              </Route>
              <Route path="/home">
                 <Home></Home>
              </Route>
              <PrivateRoute path="/team">
                 <Team></Team>
              </PrivateRoute>
              <PrivateRoute path="/services/:sname">
                 <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path="/about">
                 <AboutUs></AboutUs>
              </Route>
              <Route path="/login">
                 <Login></Login>
              </Route>
              <Route path="/register">
                 <Register></Register>
              </Route>
           </Switch>
           <Footer></Footer>
       </BrowserRouter>
       
       </AuthProvider>
    </div>
  );
}

export default App;
