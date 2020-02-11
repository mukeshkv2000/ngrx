import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/todo";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
// import { TodoAdd } from "./../../actions/todo.actions";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todos: Observable<Todo[]>;
  constructor(private store: Store<{ todos: Todo[] }>) {
    store.pipe(select("todos")).subscribe(values => {
      this.todos = values;
    });
  }

  ngOnInit() {}
}
