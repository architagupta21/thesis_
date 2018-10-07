import { Action, Dispatch, Store } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export enum Actions {
    SET_SAVE_TRUE,
    SET_SAVE_FALSE,
    INCREASE_COUNT,
    DECREASE_COUNT,
    RESET_COUNT,
    SET_DEFAULT_COUNT,
}

export interface SetSaveTrue extends Action {
    type: Actions.SET_SAVE_TRUE;
}

export interface SetSaveFalse extends Action {
    type: Actions.SET_SAVE_FALSE;
}

export type SetSaveAction = SetSaveTrue | SetSaveFalse;

/**
 * Sets redux "save" state as true, this allows the edit page to trigger the save function
 *
 * @returns {SetSaveTrue}
 */
const setSaveTrue = (): SetSaveTrue => ({
    type: Actions.SET_SAVE_TRUE,
});

/**
 *
 * Sets redux "save" state to false, this allows the edit page to be able to trigger save again,
 * otherwise when the user goes to the edit page, they it will immeditaly redirect to the app page
 *
 * @returns {SetSaveFalse}
 */
const setSaveFalse = (): SetSaveFalse => ({
    type: Actions.SET_SAVE_FALSE,
});

//#region Count Actions

//#region Count Actions Interfaces
export interface CountPayload {
    value: number;
}
export interface IncreaseCount extends Action {
    type: Actions.INCREASE_COUNT;
    payload: CountPayload;
}
export interface DecreaseCount extends Action {
    type: Actions.DECREASE_COUNT;
    payload: CountPayload;
}

export interface ResetCountArguments extends Action {
    type: Actions.RESET_COUNT;
    payload: CountPayload;
}

export interface ResetCount
    extends ThunkAction<void, RootState, {}, ResetCountArguments> {}

export interface SetCountDefault {
    type: Actions.SET_DEFAULT_COUNT;
    payload: CountPayload;
}
//#endregion Count Actions Interfaces

/**
 * Increases count by given value
 *
 * @param {number} value
 * @returns {IncreaseCount}
 */
const increaseCount = (value: number): IncreaseCount => ({
    payload: {
        value,
    },
    type: Actions.INCREASE_COUNT,
});

/**
 * Decreases count by given value
 *
 * @param {number} value
 * @returns {DecreaseCount}
 */
const decreaseCount = (value: number): DecreaseCount => ({
    payload: {
        value,
    },
    type: Actions.DECREASE_COUNT,
});

/**
 * Resets count to default value (set in store)
 *
 * This is a redux-thunk, that reads the defaultCount in redux store
 * and dispatches the reset count action using the defaultCount as payload
 *
 * @returns {ResetCount}
 */
const resetCount = (): ResetCount => (
    dispatch: Dispatch<ResetCountArguments>,
    getState
) => {
    const { defaultCount } = getState();
    dispatch({
        payload: {
            value: defaultCount,
        },
        type: Actions.RESET_COUNT,
    });
};

/**
 * Sets the defaultCount to the given value
 *
 * @param {number} value
 * @returns {SetCountDefault}
 */
const setCountDefault = (value: number): SetCountDefault => ({
    payload: {
        value,
    },
    type: Actions.SET_DEFAULT_COUNT,
});

//#endregion count actions

// function are ordered as above
export {
    setSaveTrue,
    setSaveFalse,
    increaseCount,
    decreaseCount,
    resetCount,
    setCountDefault,
};
