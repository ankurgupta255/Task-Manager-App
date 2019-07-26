import React,{useState} from 'react';
import {Modal, Button, Image} from 'react-bootstrap';

class Edittask extends React.Component{
	constructor(props){
		super()
		this.state={
			description: props.description,
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

	onDescChange=(event)=>{
	    this.setState({description: event.target.value})
	}
	onButtonSubmit=()=>{
		fetch(this.state.url,{
			method: 'PATCH',
			headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.state.token},
			body: JSON.stringify({
	      	description: this.state.description
	      })
		}).then(response=>response.json()).then(task=>{
			alert("Your Changes have been Saved Successfully, Sign In again to see the Changes.");
		})
	}
	render(){
		return(
			<div>
			<Image src="https://image.flaticon.com/icons/svg/61/61456.svg" style={{ width: '20px', height: '20px', float: 'right'}} onClick={this.handleShow} />
		      <Modal show={this.state.show} onHide={this.handleClose}>
		        <Modal.Header closeButton>
		          <b>Edit Task</b>
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
		            Save Task
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </div>
			);
	}
}

export default Edittask;