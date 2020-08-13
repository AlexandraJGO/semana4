import * as types from "../constants/actionTypes";

export const getCharacters = (payload) => ({
  type: types.GET_CHARACTERS,
  payload
});
