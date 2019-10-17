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

const staff = {
    id: 'fdsagdsafas',
    title: 'Mr',
    firstname: 'Hassan',
    lastname: 'Khosravi',
};

const staffReducer = (state = [staff], action) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.ADD_STAFF:
            return [
                ...state,
                {
                    id: payload.id,
                    title: payload.title,
                    firstname: payload.firstname,
                    lastname: payload.lastname,
                },
            ];
        case Actions.REMOVE_STAFF:
            return state.filter(state => state.id !== action.payload.id);
        case Actions.UPDATE_STAFF:
            return state.map(item => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        id: payload.id,
                        title: payload.title,
                        firstname: payload.firstname,
                        lastname: payload.lastname,
                    };
                }
                return item;
            });
        default:
            return state;
    }
};

const activities1 = {
    id: 'fda',
    name: 'Listening the lecture',
    staff: false,
    student: true,
};

const activities2 = {
    id: 'ffdsfdgq',
    name: 'Discussing the problem',
    staff: false,
    student: true,
};

const activities3 = {
    id: 'qqqqqq',
    name: 'Lecturing',
    staff: true,
    student: false,
};

const activitiesReducer = (
    state = [activities1, activities2, activities3],
    action
) => {
    /**
     
        {
            type: ADD_ACTIVITY,
            payload: {
                id,
                name,
                staff,
                student,
            }
        }
     
     */
    const { type, payload } = action;

    switch (type) {
        case Actions.ADD_ACTIVITY:
            return [
                ...state,
                {
                    id: payload.id,
                    name: payload.name,
                    staff: payload.staff,
                    student: payload.student,
                },
            ];
        case Actions.REMOVE_ACTIVITY:
            return state.filter(state => state.id !== action.payload);
        case Actions.UPDATE_ACTIVITY:
            return state.map(item => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        name: payload.name,
                        staff: payload.staff,
                        student: payload.student,
                    };
                }
                return item;
            });
        default:
            return state;
    }
};

const programsReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case Actions.ADD_PROGRAM:
            return [
                ...state,
                {
                    id: payload.id,
                    name: payload.name,
                    level: payload.level,
                },
            ];
        case Actions.REMOVE_PROGRAM:
            return state.filter(state => state.id !== action.payload);
        case Actions.UPDATE_PROGRAM:
            return state.map(item => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        name: payload.name,
                        level: payload.level,
                    };
                }
                return item;
            });
        default:
            return state;
    }
};

const course = {
    id: 'nnkjnadnk',
    code: 'DECO1300',
    name: 'Test',
    units: 2,
    semester: 'Semester 1',
    year: 2019,
};

const course1 = {
    id: 'wefadfdsnk',
    code: 'DECO7861',
    name: 'Thesis',
    units: 2,
    semester: 'Semester 1',
    year: 2019,
};

const coursesReducer = (state = [course, course1], action) => {
    const { type, payload } = action;

    switch (type) {
        case Actions.ADD_COURSE:
            return [
                ...state,
                {
                    id: payload.id,
                    code: payload.code,
                    name: payload.name,
                    units: payload.units,
                    semester: payload.semester,
                    year: payload.year,
                },
            ];
        case Actions.REMOVE_COURSE:
            return state.filter(state => state.id !== action.payload);
        case Actions.UPDATE_COURSE:
            return state.map(item => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        code: payload.code,
                        name: payload.name,
                        units: payload.units,
                        semester: payload.semester,
                        year: payload.year,
                    };
                }
                return item;
            });
        default:
            return state;
    }
};

const observationsReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case Actions.ADD_OBSERVATION:
            return [
                ...state,
                {
                    id: payload.id,
                    semester: payload.semester,
                    date: payload.date,
                    courseId: payload.courseId,
                    courseCode: payload.courseCode,
                    courseName: payload.courseName,
                    staffId: payload.staffId,
                    staff: payload.staff,
                    location: payload.location,
                    numberOfStudents: payload.numberOfStudents,
                    duration: payload.duration,
                    records: payload.records,
                },
            ];
        case Actions.REMOVE_OBSERVATION:
            return state.filter(state => state.id !== action.payload);
        case Actions.UPDATE_OBSERVATION:
            return state.map(item => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        semester: payload.semester,
                        date: payload.date,
                        courseId: payload.courseId,
                        courseCode: payload.courseCode,
                        courseName: payload.courseName,
                        staffId: payload.staffId,
                        staff: payload.staff,
                        location: payload.location,
                        numberOfStudents: payload.numberOfStudents,
                        duration: payload.duration,
                        records: payload.records,
                    };
                }
                return item;
            });
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
    staff: staffReducer,
    activities: activitiesReducer,
    programs: programsReducer,
    courses: coursesReducer,
    observations: observationsReducer,
});
