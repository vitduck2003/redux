import FiltersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/Todo/TodoSlice"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    filters: FiltersReducer,
    todoList: todoListReducer,
})
export default rootReducer