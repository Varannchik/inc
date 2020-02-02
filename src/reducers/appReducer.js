import {HANDLE_INC} from '../actions/actionTypes'
import {HANDLE_DEC} from '../actions/actionTypes'
const initialState = {
    count: 0
}
export default function(state = initialState, action){
    switch(action.type){
        case HANDLE_INC:                               
            return {
                count: state.count +=1
            }
        case HANDLE_DEC:                                       
            return {
                count: state.count -=1
            }
        default:
            return state
    }
}

