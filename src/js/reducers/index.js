import { ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM } from "../constants/types";

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        todos: [...state.todos, action.payload]
      };
    case DELETE_ITEM:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case COMPLETE_ITEM:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        )
      };
    default:
      return state;
  }
};
