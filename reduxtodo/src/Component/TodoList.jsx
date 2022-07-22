import axios from 'axios';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getTodoLoading, getTodoSuccess,getTodoError,toggleTodoLoading,toggleTodoSuccess,toggleTodoError,removeTodoLoading,removeTodoSuccess,removeTodoError } from '../redux/Action';
import {useEffect} from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {useNavigate } from 'react-router-dom';
const TodoList = () => {
    const Navigate=useNavigate();

    const {loading,error,todo}=useSelector((state) => state);
    // console.log(todo,"todo");
    const dispatch=useDispatch()


    const fetchList = () =>{
          dispatch(getTodoLoading())
        axios({
            method: 'GET',
            url: 'http://localhost:8080/todo'
        }).then(response =>{
            // console.log(response,"res");
            dispatch(getTodoSuccess(response.data));
           
        
        
        })
        .catch(error =>dispatch(getTodoError()))
    }
     
    // dispatch(getTodoSuccess(response.data))
     
    useEffect(()=>{
        fetchList();
    },[])


    const handleRemove = (id) =>{
        dispatch( removeTodoLoading())
        axios({
            method:'delete',
            url: `http://localhost:8080/todo/${id}`,
            
         }).then((response)=>{;

            // console.log(response.data,"resRemove")
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
        }).then((response)=>{
            // console.log(response.data,"restoggle");
        dispatch( toggleTodoSuccess(id));
        fetchList();
    
    })
    .catch((err)=> dispatch( toggleTodoError()))
   
    ;

    }


    const handleVisit=(id)=>{
        Navigate(`/todo/:${id}`)
    }




    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    //   }
      
    //   const rows = [
    //     createData('Frozen yoghurt', 'COMPLETED', 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 'COMPLETED', 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];


  return (




    <div>

        {loading?(<div>...loding...</div>)
        :error?<div>...error...</div>
        :
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TODO LIST</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">TOGGLE</TableCell>
            <TableCell align="right">VISIT</TableCell>
            <TableCell align="right">REMOVE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todo.map((row) => (
            <TableRow
              key={row.tittle}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tittle}
              </TableCell>
              <TableCell align="right">{row.status?"COMPLETED":"NOT-COMPLETED"}</TableCell>
             
              <TableCell align="right">{<Button onClick={()=>handleToggle(row.id,row.status)} variant="outlined">Toggle</Button>}</TableCell>
              <TableCell align="right">{<Button onClick={()=>handleVisit(row.id)} variant="outlined">More det...</Button>}</TableCell>
              <TableCell align="right">{<Button onClick={()=>handleRemove(row.id)} variant="outlined">REMOVE</Button>}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    }

    </div>
  )
}

export default TodoList