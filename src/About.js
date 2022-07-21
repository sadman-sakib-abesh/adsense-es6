import React,{useState,useEffect} from 'react';
import Post from './Post'
import './App.css';
import { useLocation ,NavLink,Link } from 'react-router-dom';
import {db,auth} from './firebase'
import queryString from 'query-string';
import { AddAlert } from '@material-ui/icons';


const About = (props)=> {

 const [search,setSearch]=useState("")
    const a=useLocation()
    const {id}=queryString.parse(a.search)




    


    const down=()=>{
    
      document.getElementById('in').style.display='block'
      
      document.getElementById('s-div').style.height='100%'
      document.getElementById('s-div').style.width='100%'
      document.getElementById('s-div').style.transition='1s'
      setTimeout(()=>{
        document.getElementById('in').style.width='300px'
        document.getElementById('in').style.transition='1s'
      
      },300)
      }
    
    const up=()=>{
      
      document.getElementById('in').style.width='0px'
      document.getElementById('in').style.transition='1s'
      document.getElementById('s-div').style.height='0%'
      document.getElementById('s-div').style.width='0%'
      document.getElementById('s-div').style.transition='1s'
      
      document.getElementById('in').style.display='none'
    
    
    }
  
    const sear=()=>{
     //// window.location.replace('/#/Search?i='+search)
     setTimeout(() => {
      document.getElementById('no-vis').click();
     }, 1000);
    ///window.location.replace('/#/Search?i='+search)
    }

    return (
        <div>
            <nav id='header'>
<b id="b-1">CLAPS&nbsp;<b id="b-2">education</b></b> 
<label id='in-1' onClick={()=>down()} type='search' placeholder='search' >search</label>
<span  onClick={()=>down()} id='search-btn'><i id='i-bar-2' class="fa fa-search"></i></span>



</nav>
<nav id='header-1'>
<div id='nav'>
<NavLink exact={true} activeClassName='active-1' className='link' to='/'>Home</NavLink>

<NavLink activeClassName='active-1' className='link' to='/Favourite'>Favourite</NavLink>
<NavLink activeClassName='active-1' className='link' to='/About'>About</NavLink>



</div>

</nav>

<a id="no-vis" href={`/#/Search?i=${search}`}>send</a>
      <div id='s-div'>
  <span><i onClick={()=>up()} class="fa fa-window-close"></i></span><br/><br/><br/><br/><br/><br/><br/><br/>
  <center><input id='in' placeholder='search' onKeyDown={(event)=>{if(event.keyCode == 13){up(); sear()}}} onChange={(e)=>setSearch(e.target.value)} type='search'/></center>
</div> 


<div id='feed'>
      <div className='about_container'>
    
      <h1 className='h1'>About Us!</h1>
    <h1>Welcome To claps education</h1>
    <h1>claps education is a Professional educational Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of educational, with a focus on dependability and photography, biology, chemistry, physics, higher math. We're working to turn our passion for educational into a booming online website. We hope you enjoy our educational as much as we enjoy offering them to you.</h1>
<h1>I will keep posting more important posts on my Website for all of you. Please give your support and love.</h1>
       
</div></div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

<div className='footer'>

 <div className='footer_container'>
   <Link id="a" to="/Contact">contact&nbsp;&nbsp;&nbsp;&nbsp;</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/Privacypolicy">privacy policy</Link>
   <br/><br/>
   </div>
</div>
        </div>
    );
};



export default About;