import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Css/GlobalCss.css';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Account/Login/Login';
import BookPackage from './pages/HomePage/BookPackege/BookPackage';
import HomePage from './pages/HomePage/HomePage';
import PrivateRoute from './pages/PrivatePage/PrivateRoute';
import Header from './pages/SharedConponents/Header/Header';
import MyOrders from './pages/MyOrders/MyOrders';
import AllBookedPackages from './pages/AllBookedPackages/AllBookedPackages';
import AddPackage from './pages/AddPackages/AddPackage';
import Footer from './pages/SharedConponents/Footer/Footer';
import Signup from './pages/Account/Signup/Signup';
import Notfound from './pages/404Page/Notfound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
       <BrowserRouter>
       <Header />
         <Switch>
           <Route exact path="/">
             <HomePage />
           </Route>
           <Route exact path="/home">
             <HomePage />
           </Route>
           <PrivateRoute exact path="/packages/bookPackage/:uniqueId">
             <BookPackage />
           </PrivateRoute>
           <PrivateRoute exact path="/myorders">
             <MyOrders />
           </PrivateRoute>
           <PrivateRoute exact path="/allorders">
             <AllBookedPackages />
           </PrivateRoute>
           <PrivateRoute exact path="/postPackage">
             <AddPackage />
           </PrivateRoute>
           <Route exact path="/login">
             <Login />
           </Route>
           <Route exact path="/signup">
             <Signup />
           </Route>
           <Route path="*">
             <Notfound />
           </Route>
         </Switch>
         <Footer />
       </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
