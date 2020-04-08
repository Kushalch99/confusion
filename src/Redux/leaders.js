import { LEADERS } from '../shared/leader';

export const leaders = (state = LEADERS,action) =>{
    switch(action.type){
        default:
            return state;
    }
}