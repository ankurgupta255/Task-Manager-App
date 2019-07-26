import React from 'react';
import './signin.css';

class Signin extends React.Component{
	constructor(props){
		super()
		this.state={
			signInEmail: '',
			signInPassword: ''
		}
	}
	onEmailChange=(event)=>{
		this.setState({signInEmail: event.target.value})
	}
	onPasswordChange=(event)=>{
		this.setState({signInPassword: event.target.value})
	}
	onSubmitSignIn=()=>{
		fetch('https://my-task-manager-api.herokuapp.com/users/login',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		}).then(response=>response.json()).then(data=>{
			if(data.user){
				this.props.loadUser(data.user)
				this.props.onTokenChange(data.token)
				this.props.onRouteChange('dashboard')
			}
			else{
				alert("Incorrect Email/Password");
			}
		})
	}
	render(){
		return(
			<main className="pa4 black-80 measure center abc">
			    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input onChange={this.onEmailChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" name="email-address"  id="email-address" required/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input onChange={this.onPasswordChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" name="password"  id="password" required/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
			    </div>
			    <div className="lh-copy mt3">
			      <a onClick={()=>this.props.onRouteChange('register')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign up</a>
			    </div>
			    <br />
			    <br />
			    <br />
			    <br />
			</main>
			);
	}
}

export default Signin;