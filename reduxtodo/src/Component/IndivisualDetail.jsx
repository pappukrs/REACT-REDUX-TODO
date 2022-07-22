import React from 'react'
import { useParams } from 'react-router-dom'
import {Button} from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoError, getTodoLoading, getTodoSuccess, removeTodoError, removeTodoLoading, removeTodoSuccess, toggleTodoError, toggleTodoLoading, toggleTodoSuccess } from '../redux/Action'
import axios from 'axios'
import { useState } from 'react'
const IndivisualDetail = () => {
    const[element,setElement]=useState([])
    const {todo}=useSelector((state)=>state);
    //  console.log("i",todo)
  const {id}=useParams()
  console.log(id,typeof id,"id",parseInt(id))
  const dispatch=useDispatch()


  const fetchList = () =>{
    dispatch(getTodoLoading())
  axios({
      method: 'get',
      url: `http://localhost:8080/todo`
  }).then(response =>{
      console.log(response,"residT");

      setElement(response.data);
     
      dispatch(getTodoSuccess(response.data));
     
  
  
  })
  .catch(error =>dispatch(getTodoError()))
}

console.log(element,"element");

const handleRemove = (id) =>{
  dispatch( removeTodoLoading())
  axios({
      method:'delete',
      url: `http://localhost:8080/todo/${id}`,
      
  }).then((response)=>{console.log(response.data,"resRemove");
  dispatch( removeTodoSuccess(id));
  fetchList();

})
.catch((err)=> dispatch( removeTodoError()))

;
}


const handleToggle=(id,status)=>{
  dispatch( toggleTodoLoading())
  axios({
      method:'patch',
      url: `http://localhost:8080/todo/${id}`,
      data:{status:!status}
  }).then((response)=>{console.log(response.data,"restoggle");
  dispatch( toggleTodoSuccess(id));
  fetchList();

})
.catch((err)=> dispatch( toggleTodoError()))

;

}
   
  useEffect(()=> {
    fetchList();
  },[])

  

     let finele=element.find((el)=>{return `:${el.id}`===(id)});
     console.log(finele,"finele")
  return (
     
    <>
   
    
    


      <div style={{display:"flex",flexDirection:"column",gap:"10px",marginLeft:"20%",marginRight:"20%",marginTop:"5%"}}>
      <h1>{finele?.tittle}</h1>
      <div>Status:{finele?.status?"COMPLETED":"NOT-COMPLETED"}</div>
      <div>{finele?.description}</div>
      <div style={{display:"flex",}}>
      <Button onClick={()=>handleRemove(finele?.id)} variant="outlined">REMOVE</Button>
      <Button onClick={()=>handleToggle(finele?.id,finele?.status)} variant="outlined">TOGGLE</Button>
      </div>
      </div>
      
    </>
    
  

   
  )
}

export default IndivisualDetail