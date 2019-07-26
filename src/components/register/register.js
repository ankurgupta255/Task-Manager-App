import React from 'react';

class Register extends React.Component{
	constructor(props){
		super()
		this.state={
			name: '',
			age: '',
			email: '',
			password: ''
		}
	}
	onNameChange=(event)=>{
	    this.setState({name: event.target.value})
	}
	onAgeChange=(event)=>{
	    this.setState({age: event.target.value})
	}
	onEmailChange=(event)=>{
	    this.setState({email: event.target.value})
	}
	onPasswordChange=(event)=>{
	    this.setState({password: event.target.value})
	}
	onSubmitSignIn=()=>{
    fetch('https://my-task-manager-api.herokuapp.com/users',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      	name: this.state.name,
      	age: this.state.age,
        email: this.state.email,
        password: this.state.password 
      })
    }).then(response=>response.json())
    .then(data=>{
    	if(data.user){
    		this.props.loadUser(data.user)
    		this.props.onTokenChange(data.token)
    		this.props.onRouteChange('dashboard')
    	}
    	else{
				alert("Please Enter Valid Email Address/Password");
		}
    })
  }
  render(){
  	return(
  		<main className="pa4 black-80 measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="name">Name</label>
			        <input onChange={this.onNameChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="name"  id="name" required/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="age">Age</label>
			        <input onChange={this.onAgeChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="number" name="age"  id="age" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input onChange={this.onEmailChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" name="email-address"  id="email-address" required/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input onChange={this.onPasswordChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" name="password"  id="password" minlength="6" required/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up" />
			    </div>
			    <div className="lh-copy mt3">
			      <a onClick={()=>this.props.onRouteChange('signin')} className="f6 link dim black db">Sign In</a>
			    </div>
			</main>
  		);
  }
}

export default Register;