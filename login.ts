import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  email: string;
  password: string;
  serverEmail: string;
  serverPass: string;
  constructor(private resto: RestoService, private router: Router) {}

  ngOnInit(): void {}
  logIn() {
    // if (this.email === 'admin@gmail.com' && this.password === 'Admin@123') {
    //   this.router.navigate(['/list']);
    // }
    if (this.email === 'akshay@outlook.com' && this.password === 'admin') {
      this.router.navigate(['/list']);
    } else {
      alert('Please Enter Valid Details');
    }
  }

  getEmail(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }
  getPass(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }
}
