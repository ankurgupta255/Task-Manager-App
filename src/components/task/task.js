import React from 'react';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import Edittask from '../edittask/edittask.js';
import Markcomp from '../markcomp/markcomp.js';
import Deletetask from '../deletetask/deletetask.js';

const Task=(props)=>{
	return(
		<div> 
		<Card bg={props.completed ? "success" : "warning"} text={props.completed ? "white" : "brown"} border="dark" >
		    <Card.Header>Card
		    <Edittask description={props.description} id={props.id} token={props.token} onRouteChange={props.onRouteChange}/>
		    <Markcomp id={props.id} token={props.token} onRouteChange={props.onRouteChange} />
		    <Deletetask id={props.id} token={props.token} onRouteChange={props.onRouteChange} />
		    </Card.Header>
		    <Card.Body>
		      <Card.Text>{props.description}</Card.Text>
		    </Card.Body>
		</Card>
		<br />
		</div>
		);
}
export default Task;