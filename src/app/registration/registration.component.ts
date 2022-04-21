import { UserService } from './../services/user/user.service';
import { User } from './../models/user.model';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  loggato:any;
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
  users: User[] = [];
  
  constructor(private userService: UserService, private route:Router) {
    this.loggato = sessionStorage.getItem('loggato');
    if (this.loggato === 'true') {
      this.route.navigate(['/']);
    }
  }

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
        window.sessionStorage.setItem('loggato', 'true');
        window.dispatchEvent( new Event('storage'))
        this.userService.getAll().subscribe(
          data => {
            data.forEach(user => {
              console.log(this.user.email);
              console.log(user.email);
              
              if (this.user.email === user.email) {
                console.log('ok');
                
                window.sessionStorage.setItem('whoLog', user.id);
                window.dispatchEvent( new Event('storage'))
              }
            });
          },
          error => {
            console.log(error);
          }
      );
      },
      error => {
        console.log(error);
      }
    );

  }

  @HostListener('window:storage')
    onStorageChange() {
      this.loggato = sessionStorage.getItem('loggato');
      if (this.loggato === 'true') {
        this.route.navigate(['/']);
      }
    }
} 
