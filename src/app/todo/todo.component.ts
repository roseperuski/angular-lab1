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
 @Input() todo: Todo;
 @Output() deleted = new EventEmitter<string>();
  public todos : Todo [];
  filter: string ="";
  todo2: Todo[];

  constructor() { 
    //inside of class, but not in constructio
    

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

  removeTask(task: string) {
    console.log(task);
    let removeIndex = this.todos.findIndex(function(todo){
      return todo.task===task;
    })
    
    this.todos.splice(removeIndex, 1);
    
  }

  addToList(task){
    console.log(task);
    this.todos.push({task: task, completed: false});
    console.log(this.todos);

  }
  
  getFilteredResults() : Todo[] {
   return this.todos.filter((todo) => {
      return this.todo.task.toLowerCase().includes(this.filter.toLowerCase());
    });
  }

  ngOnInit(): void {
  }

}
