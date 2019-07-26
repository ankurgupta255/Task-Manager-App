import React,{useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './edituser.css';

class Edituser extends React.Component{
	constructor(props){
		super()
		this.state={
			name: props.user.name,
			age: props.user.age,
			password: props.user.password
		}
	}
	handleClose = () => {
		this.setState({show: false})
	}

	handleShow = () => {
		this.setState({show: true})
	}

	onNameChange=(event)=>{
	    this.setState({name: event.target.value})
	}
	onAgeChange=(event)=>{
	    this.setState({age: event.target.value})
	}
	onPasswordChange=(event)=>{
	    this.setState({password: event.target.value})
	}
	onButtonSubmit=()=>{
		fetch('https://my-task-manager-api.herokuapp.com/users/me',{
			method: 'PATCH',
			headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.props.token},
			body: JSON.stringify({
	      	name: this.state.name,
	      	age: this.state.age,
	      	password: this.state.password
	      })
		}).then(response=>response.json()).then(user=>{
			alert("Your Changes have been Saved Successfully, Sign In again to see the Changes.");
		})
	}
	render(){
		return(
			<div>
			<br />
			<br />
		      <Button variant="primary" onClick={this.handleShow}>
		        Edit User Profile
		      </Button>
		      <Modal show={this.state.show} onHide={this.handleClose}>
		        <Modal.Header closeButton>
		          <b>Edit User Profile</b>
		        </Modal.Header>
		        <Modal.Body>
		        <div className="measure">
				    <label className="db fw6 lh-copy f6" for="name">Name</label>
			        <input onChange={this.onNameChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="name"  id="name"/>
				</div>
				<div className="measure">
				    <label className="db fw6 lh-copy f6" for="age">Age</label>
			        <input onChange={this.onAgeChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="number" name="age"  id="age" />
				</div>
				<div className="measure">
				    <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input onChange={this.onPasswordChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" name="password"  id="password"/>
				</div>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={this.handleClose}>
		            Close
		          </Button>
		          <Button variant="primary" onClick={this.onButtonSubmit}>
		            Save User Profile
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </div>
			);
	}
}

export default Edituser;