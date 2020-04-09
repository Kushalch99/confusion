import { createStore,combineReducers,applyMiddleware } from 'redux';
import {dishes } from './dishes';
import {comment } from './comment';
import {promotions } from './promotions';
import {leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:dishes,
            comments:comment,
            promotions:promotions,
            leaders:leaders
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}