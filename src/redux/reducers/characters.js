import * as types from "../constants/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.characters, action) {
  switch (action.type) {
    case types.GET_CHARACTERS_SUCCESS:
      return [...state, ...action.payload.results];
    case types.GET_CHARACTERS_ERROR:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
