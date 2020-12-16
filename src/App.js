import React from 'react'
import './App.css'
import Nav from './Nav'
import Products from './Products'
import Details from './Details'
import Cart from './Cart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products}/>
        <Route path='/details' component={Details}/>
        <Route path='/cart' component={Cart}/>
        </Switch>
       </div>
     </Router>
  );
}

const Home = () => {
  return (
  <h1>Home Page</h1>
  )
}


export default App;
