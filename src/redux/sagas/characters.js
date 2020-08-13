import { put, call } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import { getCharacters } from "../api";

export function* getCharactersSaga() {
  try {
    const characters = yield call(getCharacters);
    yield put({ type: types.GET_CHARACTERS_SUCCESS, payload: characters });
  } catch (e) {
    yield put({ type: types.GET_CHARACTERS_ERROR, payload: e });
  }
}
