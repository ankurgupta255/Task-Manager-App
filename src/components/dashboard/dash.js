import React from 'react';
import {Button, Card, Container, Row, Col, Image} from 'react-bootstrap';
import './dash.css';
import Tasklist from '../tasklist/tasklist.js';
import Addtask from '../addtask/addtask.js';
import Edituser from '../edituser/edituser.js';
import Editpic from '../editpic/editpic.js';

class Dashboard extends React.Component{
	constructor(props){
		super()
		this.state={
			tasks: [],
			image: `https://my-task-manager-api.herokuapp.com/user/${props.user.id}/avatar`
		}
	}
	componentDidMount(){
		// console.log(this.props.store.getState())
		fetch('https://my-task-manager-api.herokuapp.com/tasks',{
			method: 'get',
			headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.props.token},
		}).then(response=>response.json()).then(items=>{
			if(items.length){
				this.setState({tasks: items})
			}
		})
	}
	render(){
		return(
			<Container>
			  <Row>
			    <Col sm={8}>
			    <Card border="danger" bg="light">
				  <Card.Header as="h4">All Tasks</Card.Header>
				  <Card.Body>
				  {(this.state.tasks.length ? <div>
				  	<Tasklist tasks={this.state.tasks} token={this.props.token}/>
				  	<Addtask user={this.props.user} token={this.props.token} tasks={this.state.tasks}/>
				    </div> : <div>
				  	<h5>You have not Created Any Tasks yet</h5>
				  	<Addtask user={this.props.user} token={this.props.token}/>
				  	</div>)}
				  </Card.Body>
				</Card>
				<br />
				<br />
			    </Col>

			    <Col sm={4}>
			    <Card border="danger" bg="light">
				  <Card.Header as="h4">Profile Info</Card.Header>
				  <Image class="image" src={this.state.image} roundedCircle/>
				  <Card.Body>
				  	<h1 class="abc">{this.props.user.name}</h1>
				  	<h2 class="abc">Age: {this.props.user.age}</h2>
				  	<h4 class="abc">{this.props.user.email}</h4>
				    <Edituser user={this.props.user} token={this.props.token}/>
				    <br />
				    <Editpic user={this.props.user} token={this.props.token} />
				  </Card.Body>
				</Card>
				<br />
				<br />
			    </Col>
			  </Row>
			</Container>
			);
	}
}

export default Dashboard;