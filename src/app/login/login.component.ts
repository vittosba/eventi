import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

utentiRegistrati: any = [
  {
    email: "ciao@ciao.it",
    password: "12345678"
  },
  {
    email: "test@ciao.it",
    password: "12345678"
  },
  {
    email: "test@test.it",
    password: "12345678"
  },
  {
    email: "ciao@test.it",
    password: "12345678"
  },
  {
    email: "test@ciao.com",
    password: "12345678"
  },
]

password_modello:any;
email_modello:any;

registrato: any;

invio(form:any) {
    this.utentiRegistrati.forEach((ut: { email: any; password: any;}) => {
        if (ut.email == this.email_modello) {
            if (ut.password == this.password_modello) {
                this.registrato = true;
                localStorage.setItem('registrato', "true");
                this.registrato = localStorage.getItem('registrato');
            }
        }
    });
}
  
  constructor() { 
    this.registrato = localStorage.getItem('registrato');
   }

  ngOnInit(): void {
  }

}

