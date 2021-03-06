export const Actions = {
    SET_SAVE_TRUE: 'SET_SAVE_TRUE',
    SET_SAVE_FALSE: 'SET_SAVE_FALSE',

    INCREASE_COUNT: 'INCREASE_COUNT',
    DECREASE_COUNT: 'DECREASE_COUNT',
    RESET_COUNT: 'RESET_COUNT',
    SET_DEFAULT_COUNT: 'SET_DEFAULT_COUNT',

    GET_PHP_MESSAGE_START: 'GET_PHP_MESSAGE_START',
    GET_PHP_MESSAGE_SUCCESS: 'GET_PHP_MESSAGE_SUCCESS',
    GET_PHP_MESSAGE_ERROR: 'GET_PHP_MESSAGE_ERROR',

    GET_DB_POST_START: 'GET_DB_POST_START',
    GET_DB_POST_SUCCESS: 'GET_DB_POST_SUCCESS',
    GET_DB_POST_ERROR: 'GET_DB_POST_ERROR',

    ADD_ACTIVITY: 'ADD_ACTIVITY',
    REMOVE_ACTIVITY: 'REMOVE_ACTIVITY',
    UPDATE_ACTIVITY: 'UPDATE_ACTIVITY',

    ADD_PROGRAM: 'ADD_PROGRAM',
    REMOVE_PROGRAM: 'REMOVE_PROGRAM',
    UPDATE_PROGRAM: 'UPDATE_PROGRAM',

    ADD_COURSE: 'ADD_COURSE',
    REMOVE_COURSE: 'REMOVE_COURSE',
    UPDATE_COURSE: 'UPDATE_COURSE',

    ADD_STAFF: 'ADD_STAFF',
    REMOVE_STAFF: 'REMOVE_STAFF',
    UPDATE_STAFF: 'UPDATE_STAFF',
};

const Tables = {
    POSTS: 'posts',
};

/**
 * Action Creator:
 *
 * sets EDIT flag to be true
 *
 * @returns action object to be dispatched
 */
const setSaveTrue = () => ({
    type: Actions.SET_SAVE_TRUE,
});

/**
 * Action Creator:
 *
 * sets EDIT flag to be false
 *
 * @returns action object to be dispatched
 */
const setSaveFalse = () => ({
    type: Actions.SET_SAVE_FALSE,
});

/**
 * Action Creator:
 *
 * increases count by given value
 *
 * @param value Int
 *
 * @returns action object to be dispatched
 */
const increaseCount = value => ({
    type: Actions.INCREASE_COUNT,
    payload: {
        value,
    },
});

/**
 * Action Creator:
 *
 * decreases count by given value
 *
 * @param value Int
 *
 * @returns action object to be dispatched
 */
const decreaseCount = value => ({
    type: Actions.DECREASE_COUNT,
    payload: {
        value,
    },
});

/**
 * Action Creator:
 *
 * resets count by assinging dispatching an action with the defaultCount
 *
 * when reset count is called, the action uses redux thunk to
 * dispatch the defaultCount variable
 *
 * Read about https://github.com/reduxjs/redux-thunk to understand
 * more about what this action is doing
 *
 * @returns action object to be dispatched
 */
const resetCount = () => (dispatch, getState) => {
    const { defaultCount } = getState();
    dispatch({
        type: Actions.RESET_COUNT,
        payload: {
            value: defaultCount,
        },
    });
};

/**
 * Action Creator:
 *
 * sets the default count value with the given value
 *
 * @param value Int
 *
 * @returns action object to be dispatched
 */
const setCountDefault = value => ({
    type: Actions.SET_DEFAULT_COUNT,
    payload: {
        value,
    },
});

const getPHPMessage = () => ({
    types: [
        Actions.GET_PHP_MESSAGE_START,
        Actions.GET_PHP_MESSAGE_SUCCESS,
        Actions.GET_PHP_MESSAGE_ERROR,
    ],
    payload: {
        client: 'activityAPI', // here you can define client used
        request: {
            method: 'get',
            params: {
                action: 'hello',
                data: {
                    name: 'ankith',
                },
            },
        },
    },
});

// example of using redux thunk
const getDBPost = () => (dispatch, getState) => {
    const { phpMessage } = getState();

    console.log(
        'You can access redux state directly in actions using redux thunk: phpMessage - ',
        phpMessage
    );

    return dispatch({
        types: [
            Actions.GET_DB_POST_START,
            Actions.GET_DB_POST_SUCCESS,
            Actions.GET_DB_POST_ERROR,
        ],
        payload: {
            request: {
                method: 'get',
                url: `/${Tables.POSTS}`,
                params: {
                    filter: 'posts.title,eq,A post by Tony',
                    transform: 1,
                },
            },
        },
    });
};

const addActivity = (id, name, staff, student) => ({
    type: Actions.ADD_ACTIVITY,
    payload: {
        id,
        name,
        staff,
        student,
    },
});

const removeActivity = id => ({
    type: Actions.REMOVE_ACTIVITY,
    payload: id,
});

const updateActivity = (id, name, staff, student) => ({
    type: Actions.UPDATE_ACTIVITY,
    payload: {
        id,
        name,
        staff,
        student,
    },
});

const addProgram = (id, name, level) => ({
    type: Actions.ADD_PROGRAM,
    payload: {
        id,
        name,
        level,
    },
});

const removeProgram = id => ({
    type: Actions.REMOVE_PROGRAM,
    payload: id,
});

const updateProgram = (id, name, level) => ({
    type: Actions.UPDATE_PROGRAM,
    payload: {
        id,
        name,
        level,
    },
});

const addCourse = (id, code, name, units, semester, year) => ({
    type: Actions.ADD_COURSE,
    payload: {
        id,
        code,
        name,
        units,
        semester,
        year,
    },
});

const removeCourse = id => ({
    type: Actions.REMOVE_COURSE,
    payload: id,
});

const updateCourse = (id, code, name, units, semester, year) => ({
    type: Actions.UPDATE_COURSE,
    payload: {
        id,
        code,
        name,
        units,
        semester,
        year,
    },
});

const addStaffMember = (id, title, firstname, lastname) => ({
    type: Actions.ADD_STAFF,
    payload: {
        id,
        title,
        firstname,
        lastname,
    },
});

const updateStaffMember = (id, title, firstname, lastname) => ({
    type: Actions.UPDATE_STAFF,
    payload: {
        id,
        title,
        firstname,
        lastname,
    },
});

const removeStaffMember = id => ({
    type: Actions.REMOVE_STAFF,
    payload: {
        id,
    },
});
// function are ordered as above
export {
    setSaveTrue,
    setSaveFalse,
    increaseCount,
    decreaseCount,
    resetCount,
    setCountDefault,
    getPHPMessage,
    getDBPost,
    addActivity,
    removeActivity,
    updateActivity,
    addProgram,
    removeProgram,
    updateProgram,
    addCourse,
    removeCourse,
    updateCourse,
    addStaffMember,
    updateStaffMember,
    removeStaffMember,
};
