import * as actionTypes from "./actionTypes";
const delAction = payload => ({
  type: actionTypes.DEL,
  payload
});
const addAction = payload => ({
  type: actionTypes.ADD,
  payload
});
export { delAction, addAction };
