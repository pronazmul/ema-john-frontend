import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shops from './components/Shops/Shops';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review';
import Inventory from './components/Inventory';
import NotFound from './components/NotFound';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
            <Router>
                <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Shops></Shops>
              </Route>

              <Route path='/review'>
                <Review></Review>
              </Route>

              <Route path='/inventory'>
                <Inventory></Inventory>
              </Route>

              <Route path='/product/:key'>
                <SingleProduct></SingleProduct>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>
              </Switch>  
            </Router>
  );
}

export default App;
