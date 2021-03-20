import React from 'react'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Adventures from './components/Adventures'
import Logout from './components/Logout'
import Home from './components/Home'
import AdventureCard from './components/AdventureCard'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { currentUser } from './actions/index'


class App extends React.Component {
  componentDidMount(){
   
   const token = localStorage.getItem('token')

   if (!token){
     this.props.history.push('/login')
   }else {

    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    fetch('http://localhost:3000/current_user', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error){
        this.props.history.push('/login')
      } else {
        this.props.currentUser(data)
      }
    })
  }
}




  render() {

    return (
      
        <div className="ui container">
          <NavBar />
            <Switch>
              <Route path='/signup' component={Signup}/>
              <Route path='/login' component={Login}/>
              <Route path='/home' component={Home}/>
              <Route path='/adventures' component={Adventures}/>
            </Switch>
        </div>
      
    );

  }
 
}

const mapDispatchToProps =  {
  currentUser: currentUser
}


export default connect(null, mapDispatchToProps)(withRouter(App))
