import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todoapp';
  items = signal([
    'Install Angular CLI',
    'Delete HTML',
    'Start with Angular tutorial'
  ]);
  name = signal('Ricardo');

  colorControl = new FormControl();
  nameControl = new FormControl(
    '',
    {
      validators:[
        Validators.required,
        Validators.minLength(3)
      ]
    }
  );


  constructor(){

    this.colorControl.valueChanges.subscribe((value) => {
        console.log(value);
    });

  }

  onKeyDownEvent(event: any){

    console.log(event.target.value);
    this.name.set(event.target.value);

  }
}
