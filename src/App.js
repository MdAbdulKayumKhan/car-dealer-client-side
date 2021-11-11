import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Products from './components/Products/Products/Products';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/">
            <Home></Home>
           </Route>
           <Route path="/home">
            <Home></Home>
           </Route>
           <Route path="/products">
            <Products></Products>
           </Route>
           <Route path="/login">
            <Login></Login>
           </Route>
           <Route path="/register">
            <Register></Register>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
