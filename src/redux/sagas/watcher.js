import { takeLatest } from "redux-saga/effects";
import { getCharactersSaga } from "./characters";
import * as types from "../constants/actionTypes";

export default function* watchSearchMedia() {
  yield takeLatest(types.GET_CHARACTERS, getCharactersSaga);
}
