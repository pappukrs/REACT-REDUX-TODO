


import { ReactReduxContext } from 'react-redux'
import {GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS,ADD_TODO_LOADING,ADD_TODO_SUCCESS,ADD_TODO_ERROR,REMOVE_TODO_LOADING,REMOVE_TODO_SUCCESS,REMOVE_TODO_ERROR ,TOGGLE_TODO_LOADING,TOGGLE_TODO_SUCCESS,TOGGLE_TODO_ERROR} from './ActionType'


const initialState ={
    loading:false,
    error:false,
    todo:[]
}
const Reducer = (state=initialState,action) => {
   switch (action.type) {
    case GET_TODO_LOADING:
        return{
            ...state,
            loading: true,
             error:false
        }

        case GET_TODO_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                todo:action.payload
    
            }

            case GET_TODO_ERROR:
        return{
            ...state,
            loading: false,
             error:true,

        }



        case ADD_TODO_LOADING:
        return{
            ...state,
            loading: true,
             error:false

        }

        case ADD_TODO_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,

                todo:[...state.todo,...action.payload]
               
    
            }

            case ADD_TODO_ERROR:
        return{
            ...state,
            loading: false,
             error:true,

        }
        

        case REMOVE_TODO_LOADING:
            return{
                ...state,
                loading: true,
                 error:false
    
            }
    
            case REMOVE_TODO_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    error: false,
    
                    todo:state.todo.filter((el)=>el.id===!action.payload)
                   
        
                }
    
                case REMOVE_TODO_ERROR:
            return{
                ...state,
                loading: false,
                 error:true,
    
            }
            
       

            case TOGGLE_TODO_LOADING:
                return{
                    ...state,
                    loading: true,
                     error:false
        
                }
        
                case TOGGLE_TODO_SUCCESS:
                    return{
                        ...state,
                        loading: false,
                        error: false,
        
                        todo:state.todo.map((el)=>
                        
                                el.id===action.payload?{...el,status:!el.status}:{...el}

                                
        
                        )
                       
            
                    }
        
                    case TOGGLE_TODO_ERROR:
                return{
                    ...state,
                    loading: false,
                     error:true,
        
                }
                
   
    default:
        return {...state}
   }
}

export default Reducer