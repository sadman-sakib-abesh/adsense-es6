
import {HashRouter as Router, Route,Link,NavLink} from 'react-router-dom'
import Home from "./Home"
import Favourite from "./Favourite"
import Search from "./Search"
import Page from "./Page"
import About from './About'
import Contact from './Contact'
import PrivacyPolicy from './PrivacyPolicy'
import React,{useEffect,useState} from 'react';

function App() {
useEffect(()=>{
 if(!localStorage.getItem("favourite")){
    localStorage.setItem("favourite", JSON.stringify([]))
  }
},[])
  

useEffect(()=>{

 

  
  document.getElementById('animation-grid-1').style.bottom='0'
  document.getElementById('animation-grid-1').style.transition='3s'
  
  document.getElementById('animation-grid-2').style.bottom='0'
  document.getElementById('animation-grid-2').style.transition='3s'
  
  
  document.getElementById('animation-grid-3').style.right='0'
  document.getElementById('animation-grid-3').style.transition='3s'
  
  
  document.getElementById('animation-grid-4').style.right='0'
  document.getElementById('animation-grid-4').style.transition='3s'
  
  
  })

  return (
    <div>
      <Router>
        
      <span id='animation-grid-1'></span>
        <span id='animation-grid-2'></span>
        <span id='animation-grid-3'></span>
        <span id='animation-grid-4'></span>

      <Route exact path='/' component={Home}/>

      <Route path='/Favourite' component={Favourite}/>
      <Route path='/Page' component={Page}/>

      <Route path='/Search' component={Search}/>
      <Route path='/About' component={About}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/Privacypolicy' component={PrivacyPolicy}/>
      
     
     </Router>
    

 </div>
  );
}

export default App;