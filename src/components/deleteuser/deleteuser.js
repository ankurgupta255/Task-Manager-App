import React,{useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

class Edituser extends React.Component{
	constructor(props){
		super()
		this.state={
			id: props.user._id,
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
			method: 'DELETE',
			headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.props.token},
			body: JSON.stringify({
	      	_id: this.state.id
	      })
		}).then(response=>response.json()).then(user=>{
			this.props.onRouteChange('logout')
			alert("Your Account Has been Successfully Deleted")
		})
	}
	render(){
		return(
			<div>
			<br />
		      <Button variant="primary" onClick={this.handleShow}>
		        Delete User Account
		        </Button>
		      <Modal show={this.state.show} onHide={this.handleClose}>
		        <Modal.Header closeButton>
		          <b>Delete User Account</b>
		        </Modal.Header>
		        <Modal.Body>
				    <p>Are you sure you want to delete Your Account?</p>
				</Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={this.handleClose}>
		            No, Go Back
		          </Button>
		          <Button variant="primary" onClick={this.onButtonSubmit}>
		            Yes, Go Ahead
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </div>
			);
	}
}

export default Edituser;