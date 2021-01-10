import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 // @Input() villager: Villager;
  public todos : Todo [];

  constructor() { 
    this.todos = [
      {
        task: "feed cats",
        completed: true,
      },
      {
        task: "take over the world",
        completed: false,
      },
      {
        task: "cuddle dogs",
        completed: true,
      },
      {
        task: "run roomba",
        completed: false,
      }
    ]
  }
  completeTask = function(todo): void {
    todo.completed=true;
  
  }
  ngOnInit(): void {
  }

}
