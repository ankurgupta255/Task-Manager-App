import React from 'react';
import './navigation.css';
import video from './images/banner.mp4';
import {Button} from 'react-bootstrap';

const Navigation = ()=>{
	return(
		<main>
		  <section id="banner" data-video={video}>
		        <div class="inner">
		          <h1>Task-Manager-App</h1>
		          <p>A WebApp which can be used by Anyone and Everyone to Manage their Day-to-Day Tasks.</p>
		          <Button href="#one" variant="dark">Get Started</Button>
		        </div>
		      </section>
		      <section id="one" class="wrapper style2">
		        <div class="inner">
		          <div>
		            <div class="box">
		              <div class="image fit">
		                <img src="https://templated.co/items/demos/transitive/images/pic01.jpg" alt="" />
		              </div>
		              <div class="content">
		                <header class="align-center">
		                  <h2>AbOUT THE-TASK-MANAGER...</h2>
		                  <p>This App is Created Using an RestFull API created by Myself Only.</p>
		                </header>
		                <hr />
		                <p> This App consists of a Login/Register features so that every user can create Their tasks safe and sound and without exposing them to other people. The password for every user is stored in hashed format and can't even be decrypted by the Admin. Every Person Can Add, Edit, Delete their Tasks.</p>
		                <p> The Front End of this Website is made using ReactJS, styling is done using React-Bootstrap, the Backend of the Website is made using NodeJS, ExpressJS and the database used is MongoDB. The App is deployed on Heroku. </p>
		              </div>
		            </div>
		          </div>
		        </div>
		      </section>
		      <section id="two" class="wrapper style3">
		        <div class="inner">
		          <div id="flexgrid">
		            <div>
		              <header>
		                <h3>Use Everywhere</h3>
		              </header>
		              <p>This App can be used anywhere without any hassle and can work on mobile devices and computers at the same time.</p>
		            </div>
		            <div>
		              <header>
		                <h3>Differentiate Completed Tasks</h3>
		              </header>
		              <p>The Completed Tasks are colored Green and the Incomplete tasks are Yellow which helps to differentiate between the tasks.</p>
		    
		            </div>
		            <div>
		              <header>
		                <h3>Free of Cost</h3>
		              </header>
		              <p>This App does not cause a single dime to anyone and can be used for a lifetime.</p>
		              
		            </div>
		          </div>
		        </div>
		      </section>

		      <section id="three" class="wrapper style2">
		        <div class="inner">
		          <div class="grid-style">

		            <div>
		              <div class="box">
		                <div class="image fit">
		                  <img src="https://templated.co/items/demos/transitive/images/pic02.jpg" alt="" />
		                </div>
		                <div class="content">
		                  <header class="align-center">
		                    <h2>About Me</h2>
		                    
		                  </header>
		                  <hr />
		                  <p>I am Ankur Gupta and I am a Computer Science Engineering Student at Maharaja Surajmal Institute of Technology. I am a MERN Stack Developer and a Competitive Programmer. You Can Ceck out my profile Links at the bottom of the page.</p>
		                </div>
		              </div>
		            </div>

		            <div>
		              <div class="box">
		                <div class="image fit">
		                  <img src="https://templated.co/items/demos/transitive/images/pic03.jpg" alt="" />
		                </div>
		                <div class="content">
		                  <header class="align-center">
		                    <h2>Trace The Face WebApp</h2>
		                  </header>
		                  <hr />
		                  <p> This is another WebApp created by me which uses an Artificially Intelligent Technologies which can be used to detect the location of a single face(if multiple faces present) in any image. Check it out <a href="https://trace-the-face.herokuapp.com/"> Here</a></p>
		                </div>
		              </div>
		            </div>

		          </div>
		        </div>
		      </section>
		      {/*<section id="four" class="wrapper style3">
		      		        <div class="inner">
		      		          <header class="align-center">
		      		            <h2>Morbi interdum mollis sapien</h2>
		      		            <p>Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada. Praesent in sem ex. Morbi mattis sapien pretium tellus venenatis, at egestas urna ornare.</p>
		      		          </header>
		      
		      		        </div>
		      		      </section>*/}
		</main>
  );
}

export default Navigation;