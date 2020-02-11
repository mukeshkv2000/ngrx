import { Action } from "@ngrx/store";
import { TodoActionTypes } from "../shared/enums/todo-action-type.enum";

export class ActionParent implements Action {
  type: any;
  payload: any;
}
export class TodoAdd implements ActionParent {
  type: TodoActionTypes.Add;
  constructor(public payload: any) {}
}
