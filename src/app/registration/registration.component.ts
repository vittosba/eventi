import { UserService } from './../services/user/user.service';
import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = {
    name: '',
    surname: '',
    sex: '',
    email: '',
    password: '',
    dateofbirth: undefined,
    cityofbirth: '',
  };
  submitted = false;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      name: this.user.name,
      surname: this.user.surname,
      sex: this.user.sex,
      email: this.user.email,
      password: this.user.password,
      dateofbirth: this.user.dateofbirth,
      cityofbirth: this.user.cityofbirth,
    };

    this.userService.create(data).subscribe(
      response => {
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  } 
}
