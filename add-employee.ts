import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';
import { Restaurent } from './resto.model';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent implements OnInit {
  alert: boolean = false;
  addResto: FormGroup;

  constructor(private resto: RestoService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addResto = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  collectResto() {
    this.alert = false;
    let restaurent = this.addResto.value;
    this.createResto(restaurent);
  }

  closeAlert() {
    this.alert = false;
  }
  createResto(restaurent: Restaurent) {
    this.resto.saveResto(restaurent).subscribe((result) => (this.alert = true));
  }
}
