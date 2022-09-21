import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Container/Home/Home';
import Catalog from './Container/Catalog/Catalog';
import About from './Container/About/About';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Blog from './Container/Blog/Blog';
import Contact from './Container/Contact/Contact';
import Shop from './Container/Shop/Shop';
import Cart from './Container/Cart/Cart';
import SingleProduct from './Container/SingleProduct/SingleProduct';
import CheckOut from './Container/CheckOut/CheckOut';
import Signup from './Container/Login/Signup/Login/Signup';
import Refexample from './Container/RefExample/RefExample';

function App() {
  return (
    <>
    <Header />
    <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/Catalog"} exact component={Catalog} />
        <Route path={"/About"} exact component={About} />
        <Route path={"/Blog"} exact component={Blog} />
        <Route path={"/Contact"} exact component={Contact} />
        <Route path={"/Shop"} exact component={Shop} />
        <Route path={"/Cart"} exact component={Cart} />
        <Route path={"/SingleProduct"} exact component={SingleProduct} />
        <Route path={"/CheckOut"} exact component={CheckOut} />
        <Route path={"/Signup"} exact component={Signup} />
        <Route path={"/Refexample"} exact component={Refexample} />









        

    </Switch>
    {/* <Footer /> */}
    </>
  );
}

export default App;
