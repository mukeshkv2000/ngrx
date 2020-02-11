import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { TodoReducer } from "./reducers/todo.reducer";
import { TodoComponent } from "./components/todo/todo.component";

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: TodoReducer }),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
