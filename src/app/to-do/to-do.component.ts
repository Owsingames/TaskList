import { Component, OnInit } from '@angular/core';
import {Todo} from './ToDo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }
  taskList: Todo[] =
  [{task:"Schedule CS meeting", completed:false, exp:15},
  {task:"Schedule suit fitting", completed:false, exp:10},
  {task:"Dishes", completed:true, exp:5},
  {task:"Finish LinkedIn", completed:false, exp:50},
  {task:"Make loan payment", completed:false, exp:10},
  {task:"Take out trash", completed:true, exp:5},
  {task:"Call vet - move appointment", completed:true, exp:5},
  {task:"Order Melody a birthday gift", completed:true, exp:15},
  {task:"Pay Internet", completed:true, exp:10}];

  complete(index:number){
    this.taskList[index].completed = true;
  }

  addTask(form: NgForm){
    let newTask: Todo = {task:form.form.value.task, completed:false, exp:5};
    this.taskList.push(newTask);
  }


  ngOnInit(): void {
  }

}
