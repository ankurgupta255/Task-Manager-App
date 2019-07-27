import React,{useState} from 'react';
import {Modal, Button, Image} from 'react-bootstrap';

class Deletetask extends React.Component{
	constructor(props){
		super()
		this.state={
			url: `https://my-task-manager-api.herokuapp.com/tasks/${props.id}`,
			token: props.token
		}
	}
	handleClose = () => {
		this.setState({show: false})
	}

	handleShow = () => {
		this.setState({show: true})
	}

	onButtonSubmit=()=>{
		fetch(this.state.url,{
			method: 'DELETE',
			headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.state.token},
		}).then(response=>response.json()).then(task=>{
			this.props.onRouteChange('logout')
			alert("Your Task has been deleted Successfully, Sign In again to see the Changes.");
		})
	}
	render(){
		return(
			<div>
			<Image src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-64-512.png" style={{ width: '20px', height: '20px', float: 'right'}} onClick={this.handleShow} />
		      <Modal show={this.state.show} onHide={this.handleClose}>
		        <Modal.Header closeButton>
		          <b>Delete Task</b>
		        </Modal.Header>
		        <Modal.Body>
				    <p>Are you sure you want to delete this task?</p>
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

export default Deletetask;