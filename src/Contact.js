import React,{useState,useEffect} from 'react';
import Post from './Post'
import './App.css';
import { NavLink,Link } from 'react-router-dom';
import {db,auth} from './firebase'


const Contact=()=> {

  const[posts,setPosts]=useState([])
  



useEffect(()=>{
db.collection('posts').onSnapshot(res=>{

  setPosts(res.docs.map(doc=>({
    id:doc.id,
    post:doc.data()
  })))

})
},posts)






const [search,setSearch]=useState('')


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
    <div className="App">



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
      <div className='post_container'>
    
     
    <h1>Contact Us !</h1>
    <h2 >Welcome to claps.store!</h2>
    
    Please email us if you have any queries about the site, advertising, or anything else.
    
    
      
     <br/> <img alt="contact-us" height="87" src="https://lh3.googleusercontent.com/-BA7qy8h_v1g/YLVCWDNZdCI/AAAAAAAAALw/rsHNJWX0BK4P5CuB0ymG8QkJ9A9E8KchgCLcBGAsYHQ/w320-h87/email-us-1805514__480.webp" width="320"/>
      
     <br/> <a href="mailto:sadmansakib@claps.store">sadmansakib@claps.store</a><br/>
        
    <a href="tel:01712345510">whatsapp-01712345510</a><br/>
     
   <h3>We will revert you as soon as possible...!</h3>
      <p>Thank you for contacting us! <br/><b>Have a great day</b></p>
    </div>
  
</div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

<div className='footer'>

 <div className='footer_container'>
   <Link id="a" to="/Contact">contact&nbsp;&nbsp;&nbsp;&nbsp;</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/Privacypolicy">privacy policy</Link>
   <br/><br/>
   </div>
</div>
</div>


  );
}

export default Contact;