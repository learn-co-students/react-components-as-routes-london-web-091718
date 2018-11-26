import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Login extends React.Component {
render (){
  return (
  <div>
    <form>
      <div>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>
      <Link to='/' >Home!</Link><br></br>
      <Link to='/about' >About!</Link>
  </div>
);
}
}

class Home extends React.Component {
  render() {
  return (
    <div>
      <h1>Home!</h1>
      <Link to='/about' >About!</Link><br></br>
      <Link to='/login' >Login!</Link>
    </div>
  )}
}

class About extends React.Component {
  render() {
    return(
      <div>
        <h1>This is about!!!</h1>
        <Link to='/' >Home!</Link><br></br>
        <Link to='/login' >Login!</Link>
      </div >
  )
}}
 

ReactDOM.render( 
  <Router>
    <React.Fragment>
    <Route exact path="/" component={ Home } />
    <Route exact path="/about" component={ About } />
      <Route exact path="/login" component={ Login } />
    </React.Fragment>
  </Router>
  ,
  document.getElementById('root')
);
