import { TodoActionTypes } from "../shared/enums/todo-action-type.enum";
import { ActionParent } from "../actions/todo.actions";
import { Todo } from "../models/todo";

export const initialState: Todo[] = [
  { title: "Todo 1" },
  { title: "Todo 2" },
  { title: "Todo 3" },
  { title: "Todo 4" }
];

export function TodoReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    default:
      return state;
  }
}
