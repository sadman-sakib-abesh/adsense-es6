import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar'
import { db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormatColorReset } from '@material-ui/icons';



function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };

}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width:400,
    overflowY:'scroll',
    backgroundColor: theme.palette.background.paper,
  border:'0px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const useStyles2 = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width:700,
    overflowY:'scroll',
    backgroundColor: theme.palette.background.paper,
  
    boxShadow: theme.shadows[5],
    padding:'0px'
  },
}));




const Post =({id,user,like,userName,Video,Title,Caption,image,comments}) =>{

  const [modalStyle] = React.useState(getModalStyle);
const [open,setOpen]=useState(false)
const [card,setCard]=useState(false)
const [comment,setComment]=useState('')
const classes = useStyles();
const classes2 = useStyles2();

const liking=()=>{
  

    let likes=JSON.parse(localStorage.getItem("favourite"))
  
likes.push({
  id:id,
     key:id,
     like:like,
     Title:Title,
     Video:Video,
     comments:comments,
     userName:userName,
     image:image,
     Caption:Caption
})

document.getElementById('heart-1').style.transition='0.6s'

localStorage.setItem("favourite", JSON.stringify(likes))

//setTimeout(() => {
  
 
//}, 500);

 
alert("added to favourite")
window.location.reload()
}














const unlike=()=>{
  
    let likes=JSON.parse(localStorage.getItem("favourite"))
  
    
    likes.splice(likes.indexOf({
      id:id,
         key:id,
         like:like,
         Title:Title,
         comments:comments,
         userName:userName,
         image:image,
         Caption:Caption
    }), 1);
  
  document.getElementById('heart-2').style.transition='0.6s'
  

  localStorage.setItem("favourite", JSON.stringify(likes))
 
  alert("removed from favourite")
  window.location.reload()
}






        return (
            <div className='post'>
            
            

     




              <div className='post_header'>
                <Avatar alt={userName}
              style={{ height: '35px', width: '35px',fontSize:'18px'}}
                 src="/static/images/avatar/1.jpg" 
                 className='post_avatar' />
<h3>{userName}</h3>
</div>

<h4 className='post_text'> <strong>{Title}</strong><br/>{Caption}</h4>
{Video?<iframe width="560" height="315" src={Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:<img src={image}
alt=''
className='image_post'/>}
{ localStorage.getItem("favourite").indexOf(id) !==-1?<i id='heart-2' onClick={()=>unlike()} class='fa fa-heart'></i>:<i id='heart-1' onClick={()=>liking()} class='fa fa-heart-o'></i>}

            </div>
        );


};

export default Post;