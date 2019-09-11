import * as actionTypes from "./actionTypes";
const delAction = payload => ({
  type: actionTypes.DEL,
  payload
});
const addAction = payload => ({
  type: actionTypes.ADD,
  payload
});
const authAction = (payload = {}) => ({
  type: actionTypes.AUTH,
  payload
});
const unauthAction = (payload = {}) => ({
  type: actionTypes.UNAUTH,
  payload
});
export { delAction, addAction, authAction, unauthAction };
