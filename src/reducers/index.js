import { combineReducers } from 'redux';

import { Actions } from '../actions';

const defaultCountReducer = (state = 0, action) => {
    switch (action.type) {
        case Actions.SET_DEFAULT_COUNT:
            return action.payload.value;
        default:
            return state;
    }
};

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case Actions.INCREASE_COUNT:
            return state + action.payload.value;
        case Actions.DECREASE_COUNT:
            return state - action.payload.value;
        case Actions.RESET_COUNT:
            return action.payload.value;
        default:
            return state;
    }
};

const saveReducer = (state = false, action) => {
    switch (action.type) {
        case Actions.SET_SAVE_TRUE:
            return true;
        case Actions.SET_SAVE_FALSE:
            return false;
        default:
            return state;
    }
};

const phpMessageReducer = (state = '', action) => {
    switch (action.type) {
        case Actions.GET_PHP_MESSAGE_SUCCESS:
            return action.payload.data;
        default:
            return state;
    }
};

const dbPostReducer = (state = '', action) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.GET_DB_POST_SUCCESS:
            if (payload.data.posts.length > 0) {
                return payload.data.posts[0].text;
            }
            return 'No Posts Available';
        default:
            return state;
    }
};

const progamExistsReducer = (state = false, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
};

export default combineReducers({
    count: countReducer,
    defaultCount: defaultCountReducer,
    save: saveReducer,
    phpMessage: phpMessageReducer,
    dbPost: dbPostReducer,
    programExists: progamExistsReducer,
});
