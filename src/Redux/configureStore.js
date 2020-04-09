import { createStore,combineReducers,applyMiddleware } from 'redux';
import {createForms} from 'react-redux-form'
import {dishes } from './dishes';
import {comment } from './comment';
import {promotions } from './promotions';
import {leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:dishes,
            comments:comment,
            promotions:promotions,
            leaders:leaders,
            ...createForms({
                feedback:InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}