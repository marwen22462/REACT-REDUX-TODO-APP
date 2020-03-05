import { ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM } from "../constants/types";

export const addItem = todo => {
  return {
    type: ADD_ITEM,
    payload: todo
  };
};
export const deleteTodo = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
export const completeTodo = id => {
    return  {
        type: COMPLETE_ITEM,
        payload: id
    }
}