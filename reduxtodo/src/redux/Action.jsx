
import React from 'react'
import { GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS,ADD_TODO_LOADING,ADD_TODO_SUCCESS,ADD_TODO_ERROR,REMOVE_TODO_LOADING,REMOVE_TODO_SUCCESS,REMOVE_TODO_ERROR,TOGGLE_TODO_LOADING,TOGGLE_TODO_SUCCESS,TOGGLE_TODO_ERROR} from './ActionType'

export const getTodoLoading = () => {
  return {
    type:GET_TODO_LOADING,
  }
}

export const getTodoSuccess = (payload) => {
    return {
      type:GET_TODO_SUCCESS,
      payload
    }
  }

  export const getTodoError = () => {
    return {
      type:GET_TODO_ERROR,
    
    }
  }



  export const addTodoLoading = () => {
    return {
      type:ADD_TODO_LOADING,
    }
  }
  
  export const addTodoSuccess = (payload) => {
      return {
        type:ADD_TODO_SUCCESS,
        payload
      }
    }
  
    export const addTodoError = () => {
      return {
        type:ADD_TODO_ERROR,
      
      }
    }


    export const removeTodoLoading = () => {
        return {
          type:REMOVE_TODO_LOADING,
        }
      }
      
      export const removeTodoSuccess = (payload) => {
          return {
            type:REMOVE_TODO_SUCCESS,
            payload
          }
        }
      
        export const removeTodoError = () => {
          return {
            type:REMOVE_TODO_ERROR,
          
          }
        }


        export const toggleTodoLoading = () => {
            return {
              type:TOGGLE_TODO_LOADING,
            }
          }
          
          export const toggleTodoSuccess = (payload) => {
              return {
                type:TOGGLE_TODO_SUCCESS,
                payload
              }
            }
          
            export const toggleTodoError = () => {
              return {
                type:TOGGLE_TODO_ERROR,
              
              }
            }
    