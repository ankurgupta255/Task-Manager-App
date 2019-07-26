import React,{Component} from 'react';
import './App.css';
import Signin from '../components/signin/signin.js';
import Particles from 'react-particles-js';
import Navigation from '../components/navigation/navigation.js';
import Header from '../components/header/header.js';
import Register from '../components/register/register.js';
import Dashboard from '../components/dashboard/dash.js';
import Footer from '../components/footer/footer.js';

const initinalState={
  route: '',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    age: '',
    avatar: ''
  },
  token: ''
}

class App extends Component{
  constructor(){
    super()
    this.state={
      route: '',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        age: '',
        avatar: ''
      },
      token: ''
    }
  }
  loadUser=(data)=>{
    this.setState({user: {
      id: data._id,
      name: data.name,
      email: data.email,
      age: data.age,
      tokens: data.tokens,
      avatar: data.avatar
    }}
  )}
  onRouteChange=(route)=>{
    if(route=== 'logout'){
      this.setState(initinalState)
    }
    else if(route === 'dashboard'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }
  onTokenChange=(token)=>{
    this.setState({token: token})
  }
  onButtonSubmit=()=>{
    fetch('https://my-task-manager-api.herokuapp.com/users/logoutAll',{
      method: 'post',
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.state.token},
      body: JSON.stringify({
        id: this.state.user.id
        })
    })
    this.onRouteChange('logout')
  }

  render(){
    return (
      <div>
      <Header isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} onButtonSubmit={this.onButtonSubmit} />
      {(this.state.route === 'signin' ? <Signin onRouteChange={this.onRouteChange} onTokenChange={this.onTokenChange} loadUser={this.loadUser}/> : (this.state.route === 'register' ? <Register onRouteChange={this.onRouteChange} onTokenChange={this.onTokenChange} loadUser={this.loadUser}/> : (this.state.route=== 'dashboard' ? <Dashboard token={this.state.token} user={this.state.user}/> : <Navigation />)))}
      <Footer />
      </div>
    );
  }
}

export default App;
