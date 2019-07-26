import React from 'react';
import {Modal, Button} from 'react-bootstrap';
const axios = require("axios");

class Editpic extends React.Component{
	constructor(props){
		super()
		this.state={
			show: false,
			file: null
		}
	}
	handleClose = () => {
		this.setState({show: false})
	}

	handleShow = () => {
		this.setState({show: true})
	}

	onChange=(event)=>{
        this.setState({file: event.target.files[0]})
    }

	onButtonSubmit=()=>{

		const formData = new FormData();
        formData.append('upload',this.state.file);
        const config={
        	headers: {'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer ' + this.props.token}
        };
        axios.post("https://my-task-manager-api.herokuapp.com/user/me/avatar",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
	}
	render(){
		return(
			<div>
		      <Button variant="primary" onClick={this.handleShow}>
		        Update Profile Pic
		      </Button>
		      <Modal show={this.state.show} onHide={this.handleClose}>
		        <Modal.Header closeButton>
		          <b>Update Profile Pic</b>
		        </Modal.Header>
		        <Modal.Body>
		        <div className="measure">
				    <label for="name" className="f6 b db mb2">Image Upload</label>
				    <input id="name" onChange={this.onChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="file" aria-describedby="name-desc" required/>
				</div>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={this.handleClose}>
		            Close
		          </Button>
		          <Button variant="primary" onClick={this.onButtonSubmit}>
		            Upload Image
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </div>
			);
	}
}

export default Editpic;