import React from 'react';
import './header.css';

const Header=({isSignedIn,onRouteChange,onButtonSubmit})=>{
	if(isSignedIn){
			return(
	<nav className="flex justify-between bb b--white-10 back">
	  <a className="link white-70 hover-white no-underline flex items-center pa3" href="">
	      <title>Super Normal Icon Mark</title>
	  </a>
	  <div className="flex-grow pa3 flex items-center">
	    <a onClick={()=>onRouteChange('dashboard')} className="f6 link dib white dim mr3 mr4-ns" href="#0">Dashboard</a>
	    <a onClick={onButtonSubmit} className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Out</a>
	  </div>
	</nav>
		);
	}
	else{
		return(
	<nav className="flex justify-between bb b--white-10 back">
	  <a className="link white-70 hover-white no-underline flex items-center pa3" href="">
	      <title>Super Normal Icon Mark</title>
	  </a>
	  <div className="flex-grow pa3 flex items-center">
	    <a onClick={()=>onRouteChange('navigation')} className="f6 link dib white dim mr3 mr4-ns" href="#0">About</a>
	    <a onClick={()=>onRouteChange('signin')} className="f6 link dib white dim mr3 mr4-ns" href="#0">Sign In</a>
	    <a onClick={()=>onRouteChange('register')} className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
	  </div>
	</nav>
		);
	}
}
export default Header;