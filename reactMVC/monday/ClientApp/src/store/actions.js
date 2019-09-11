import * as actionTypes from "./actionTypes";
const delAction = payload => ({
  type: actionTypes.ADD,
  payload
});
const addAction = payload => ({
  type: actionTypes.DEL,
  payload
});
export { delAction, addAction };
