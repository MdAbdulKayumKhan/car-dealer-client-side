import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Products from './components/Products/Products/Products';

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
         </Switch>
       </Router>
    </div>
  );
}

export default App;
