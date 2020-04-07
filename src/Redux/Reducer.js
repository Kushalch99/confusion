import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';
import { DISHES } from '../shared/dishes';


export const initialState = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
};

export const Reducer = (state = initialState,action) => {
    return state;
};