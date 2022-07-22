import React from 'react'
import {Routes,Route} from 'react-router-dom';

import  TodoForm from '../Component/TodoForm';
import  TodoList from '../Component/TodoList';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<TodoForm/>}/>
            <Route path='/todolist' element={<TodoList/>}/>

            {/* <Route path={`/:${id}`} element={<IndivisualDetail/>}/> */}
        </Routes>

    </div>
  )
}

export default Router