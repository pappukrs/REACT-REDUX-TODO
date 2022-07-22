
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addTodoSuccess , addTodoLoading, addTodoError, getTodoLoading, getTodoSuccess, getTodoError} from '../redux/Action';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TodoForm = () => {
    const Navigate=useNavigate()
  const dispatch = useDispatch();

   const[tittle,setTittle]=React.useState("");
   const[des,setDes]=React.useState("");

  let [status, setStatus] = React.useState("");


  const fetchList = () =>{
    dispatch(getTodoLoading)
  axios({
      method: 'GET',
      url: 'http://localhost:8080/todo'
  }).then(response =>{
      console.log(response,"res");
      dispatch(getTodoSuccess(response.data));
     
  
  
  })
  .catch(error =>dispatch(getTodoError()))
}

  const handleAdd=(body) => {
    dispatch(addTodoLoading());
   axios({
    method:"post",
    url:"http://localhost:8080/todo",
    data:body,
   }).then((response) => {dispatch(addTodoSuccess(response.data)); })
   .catch((err)=>{dispatch(addTodoError());
     
   
  
  });
    Navigate('/todolist');
  }
  
  // fetchList();
  // dispatch(addTodoSuccess(response.data))
   const statusoption = [
    {
      value: 'true',
      label: 'Completed',
    },
    {
      value: 'false',
      label: 'Not Completed',
    },
   
   
  ];
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"5px",margin:"0 30%"}}>
        <div>
         <h1>Create Todo List</h1>
         </div>
           <div>
           <TextField value={tittle} onChange={(e)=>setTittle(e.target.value)}id="outlined-basic" label="TASK" variant="outlined" placeholder='Add Todo list' />
           </div>
        <div>
        <TextField
          id="outlined-multiline-static"
          value={des} onChange={(e)=>setDes(e.target.value)}
          label="Description"
          multiline
          rows={4}
          
          placeholder='Add Description'
        />
        </div>
       
       <div>
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={status}
           onChange={(e)=>setStatus(e.target.value)}
          helperText="Please select Todo Status"
        >
          {statusoption.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
      
    </Box>
    <Button onClick={()=>handleAdd({tittle,description:des,status:status})} variant="outlined">ADD TODO</Button>


       </div>








       




    </div>
  )
}

export default TodoForm