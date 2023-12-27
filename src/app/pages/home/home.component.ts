import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  newTaskControl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  });
  tasks = signal<Task[]>([]);

  filter = signal('all');
  tasksByFilter = computed(()=>{

    //'computed' will calculate new statuses and compose a new one base on those
    let currentFilter = this.filter();
    let currentTasks = this.tasks();

    switch(currentFilter) { 
      case 'completed': { 
         return currentTasks.filter(task => task.completed)
      } 
      case 'pending': { 
        return currentTasks.filter(task => !task.completed)
      } 
      default: { 
         return currentTasks;
      } 
   } 
  });

  constructor() {
    //'effect' will watch signals some component but didn't return anything

    let storage = localStorage.getItem('tasks');
    if(storage){
      this.tasks.set(JSON.parse(storage));
    }

    effect(()=>{

      console.log('effect');
      let currentTasks = this.tasks();
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));

    });
  }

  changeFilter(newFilter: string){
    this.filter.set(newFilter);
  }

  addTask(event: Event){

    let input = event.target as HTMLInputElement;
    console.log(input.value);
    /*
    let newValues:string[] = this.tasks().concat(event.target.value)
    this.tasks.set(newValues);
    */


    this.tasks.update((tasks) => [...tasks, 
      {
        id:Date.now(),
        title: input.value,
        completed: false,
        editing: false
      }
    ]); //protect the inmutability doesn't make sense as at the end we're changing the global one
    input.value = '';
  }

  addTaskFromControl(){

    if(this.newTaskControl.valid && this.newTaskControl.value.trim().length>=1) {
      let newValues:Task[] = this.tasks().concat({
        id:Date.now(),
        title: this.newTaskControl.value,
        completed: false,
        editing: false
      })
      this.tasks.set(newValues);
    }
  }

  deleteTask(index: number) {
    this.tasks.set(this.tasks().filter((task, position) => position != index));
  }

  markAsCompelted(task: Task) {

    /*
    console.log(index);
    let updateTasks = this.tasks();
    console.log(updateTasks[index].completed);
    updateTasks[index].completed = !updateTasks[index].completed;
    console.log(updateTasks[index].completed);
    this.tasks.set(updateTasks);
    
    this.tasks()[index].completed = !this.tasks()[index].completed;
    this.tasks.set(this.tasks())
    */
    task.completed = !task.completed;
   
  }

  changeEditingMode(task: Task){
    task.editing = !task.editing;
  }


}
