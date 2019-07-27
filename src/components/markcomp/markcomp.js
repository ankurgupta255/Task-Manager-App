import React from 'react';
import {Image} from 'react-bootstrap';

class Markcomp extends React.Component{
	constructor(props){
		super()
		this.state={
			url: `https://my-task-manager-api.herokuapp.com/tasks/${props.id}`,
			token: props.token
		}
	}

	onButtonSubmit=()=>{
		fetch(this.state.url,{
			method: 'PATCH',
			headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.state.token},
			body: JSON.stringify({
	      	completed: true
	      })
		}).then(response=>response.json()).then(task=>{
			this.props.onRouteChange('dashboard')
			alert("Your Task has been marked Completed Successfully, Sign In again to see the Changes.");
		})
	}

	render(){
		return(
			<Image src="http://cdn.onlinewebfonts.com/svg/img_138914.png" style={{ width: '20px', height: '20px', float: 'right'}} onClick={this.onButtonSubmit} />
			);
	}
}

export default Markcomp;