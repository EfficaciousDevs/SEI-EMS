import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  obj: any;

  @Input() formData: any = [];
  @Output() onAdd = new EventEmitter();

  userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),
  });
  constructor() {}
  onSubmit() {
    this.obj = this.userForm.value;
    this.onAdd.emit(this.obj);
    console.log(this.userForm.value);
    this.userForm.reset();
  }

  ngOnInit() {}
}
