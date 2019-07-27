import React,{useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './addtask.css';

class Addtask extends React.Component{
	constructor(props){
		super()
		this.state={
			completed: false,
			description: '',
			show: false
		}
	}
	handleClose = () => {
		this.setState({show: false})
	}

	handleShow = () => {
		this.setState({show: true})
	}

	onDescChange=(event)=>{
	    this.setState({description: event.target.value})
	}
	onCompChange=(event)=>{
	    this.setState({completed: event.target.value})
	}
	onButtonSubmit=()=>{
		fetch('https://my-task-manager-api.herokuapp.com/tasks',{
			method: 'post',
			headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.props.token},
			body: JSON.stringify({
	      	owner: this.props.user._id,
	      	description: this.state.description,
	      	completed: this.state.completed
	      })
		}).then(response=>response.json()).then(task=>{
			if(this.props.tasks){
				this.props.tasks.push(task)
				this.props.onRouteChange('dashboard')
			}
			alert("Your Task has been Added Successfully, Sign In again to see the Changes.");
		})
	}
	render(){
		return(
			<div>
			<br />
			<br />
		      <Button variant="primary" onClick={this.handleShow}>
		        Add a Task
		      </Button>
		      <Modal bg="primary" show={this.state.show} onHide={this.handleClose}>
		        <Modal.Header closeButton>
		          <b>Add a Task</b>
		        </Modal.Header>
		        <Modal.Body>
				    <label for="name" className="f6 b db mb2">Task Description</label>
				    <input onChange={this.onDescChange} id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" required/>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={this.handleClose}>
		            Close
		          </Button>
		          <Button variant="primary" onClick={this.onButtonSubmit}>
		            Save The Task
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </div>
			);
	}
}

export default Addtask;