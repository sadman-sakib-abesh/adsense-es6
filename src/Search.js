import React, { useEffect,useState} from 'react';
import { useLocation ,NavLink,Link} from 'react-router-dom';
import queryString from 'query-string';
import Post from './Post'
import {db,auth} from './firebase'
import { PhotoSizeSelectActual } from '@material-ui/icons';

const Search=(props) =>{
    const {search}=useLocation()
    const {i}=queryString.parse(search)
    const [data,setData]=useState([])
    
    const [sea,setSearch]=useState('')


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
     
     document.getElementById('no-vis').click();

     setTimeout(() => {
        window.location.reload()
    
     }, 1000);
    
  
  
    }
  
  
  
  
  
  
 


    useEffect(()=>{
        db.collection('posts').onSnapshot(res=>{

            res.docs.map(doc=>{
                if(doc.data().Title.indexOf(i) !==-1 || doc.data().Caption.indexOf(i) !==-1){ setData(arr=>[...arr, {
                    id:doc.id,
                    post:doc.data()
                  }])
          
                  
                }
            
        
        })

            
        
          
          })
          
         
          },data)


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

<a id="no-vis" href={`/#/Search?i=${sea}`}>send</a>
      <div id='s-div'>
  <span><i onClick={()=>up()} class="fa fa-window-close"></i></span><br/><br/><br/><br/><br/><br/><br/><br/>
  <center><input id='in' placeholder='search' onKeyDown={(event)=>{if(event.keyCode == 13){up(); sear()}}} onChange={(e)=>setSearch(e.target.value)} type='search'/></center>
</div> 
        <div className='post_container'>





        {data.map(({id,post})=><>
     
        <Link className='a' to={`/Page?id=${id}`}><Post
     id={id}
     key={id}
     like={post.like}
     Title={post.Title}
     Video={post.Video}
     comments={post.comments}
     userName={post.userName}
     image={post.image}
     Caption={post.Caption.substr(0,500)+".        .       ."}
     /></Link>
     </>)}  
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

export default Search;