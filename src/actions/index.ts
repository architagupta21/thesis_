import { Dispatch, Store } from "redux";
import { RootState } from "../reducers";
import { ThunkAction } from "redux-thunk";

export enum Actions {
  SET_SAVE_TRUE,
  SET_SAVE_FALSE,
  INCREASE_COUNT,
  DECREASE_COUNT,
  RESET_COUNT,
  SET_DEFAULT_COUNT
}

export interface SetSaveTrue {
  type: Actions.SET_SAVE_TRUE;
}

export interface SetSaveFalse {
  type: Actions.SET_SAVE_FALSE;
}

export type SetSaveAction = SetSaveTrue | SetSaveFalse;

const setSaveTrue = (): SetSaveTrue => ({
  type: Actions.SET_SAVE_TRUE
});

const setSaveFalse = (): SetSaveFalse => ({
  type: Actions.SET_SAVE_FALSE
});

//#region Count Actions

//#region Count Actions Interfaces
export interface CountPayload {
  value: number;
}
export interface IncreaseCount {
  type: Actions.INCREASE_COUNT;
  payload: CountPayload;
}
export interface DecreaseCount {
  type: Actions.DECREASE_COUNT;
  payload: CountPayload;
}

export interface ResetCountArguments {
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

const increaseCount = (value: number): IncreaseCount => ({
  type: Actions.INCREASE_COUNT,
  payload: {
    value
  }
});

const decreaseCount = (value: number): DecreaseCount => ({
  type: Actions.DECREASE_COUNT,
  payload: {
    value
  }
});

const resetCount = (): ResetCount => (
  dispatch: Dispatch<ResetCountArguments>,
  getState
) => {
  const { defaultCount } = getState();
  dispatch({
    type: Actions.RESET_COUNT,
    payload: {
      value: defaultCount
    }
  });
};

const setCountDefault = (value: number): SetCountDefault => ({
  type: Actions.SET_DEFAULT_COUNT,
  payload: {
    value
  }
});

//#endregion count actions

// function are ordered as above
export {
  setSaveTrue,
  setSaveFalse,
  increaseCount,
  decreaseCount,
  resetCount,
  setCountDefault
};
