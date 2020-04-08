import { createStore,combineReducers } from 'redux';
import {dishes } from './dishes';
import {comment } from './comment';
import {promotions } from './promotions';
import {leaders } from './leaders';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:dishes,
            comments:comment,
            promotions:promotions,
            leaders:leaders
        })
    );
    return store;
}