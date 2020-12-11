import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Default,Details,Navbar,ProductList,Cart,Modal} from './components';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={ProductList} />
      <Route path='/details' component={Details} />
      <Route path='/cart' component={Cart} />
      <Route path='**' component={Default} />
    </Switch>
    <Modal />
    </>
  );
}

export default App;
