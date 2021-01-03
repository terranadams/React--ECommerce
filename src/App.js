import React from 'react'
import './App.css'
import Nav from './Nav'
import Products from './Products'
import Cart from './Cart'
import ItemDetail from './ItemDetail'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/products/:id' component={ItemDetail}  />
        </Switch>
       </div>
     </Router>
  );
}

const Home = () => {
  return (
    <>
  <h1>Welcome to my E-Commerce website!!!</h1>
  <p>Hope you enjoy your stay :)</p>

  <Link to='/products'><button>Product Page</button></Link>
  <br></br>
  <br></br>
  <Link to='/cart'><button>Cart Page</button></Link>
  </>
  )
}


export default App;
