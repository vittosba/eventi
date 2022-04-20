import { UserService } from './../services/user/user.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { User } from './../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


password_modello:any;
email_modello:any;

registrato: any;
utentiRegistrati: User[] = [];
constructor(private userService: UserService) { 
  this.userService.getAll()
      .subscribe(
        data => {
          this.utentiRegistrati = data;          
        },
        error => {
          console.log(error);
        });
}

login() {
  this.utentiRegistrati.forEach(ur => {
    if (ur.email === this.email_modello) {
      if (ur.password === this.password_modello) {
        window.localStorage.setItem('registrato', "true");
                window.dispatchEvent( new Event('storage'))
                this.registrato = localStorage.getItem('registrato');
                this.email_modello = '';
                this.password_modello = '';
      }
    }
  });
}

// this.utentiRegistrati.array.forEach(element => {
  
// });

// invio(form:any) {
//     this.utentiRegistrati.forEach((ut: { email: any; password: any; }) => {
//         if (ut.email == this.email_modello) {
//             if (ut.password == this.password_modello) {
//                 window.localStorage.setItem('registrato', "true");
//                 window.dispatchEvent( new Event('storage'))
//                 this.registrato = localStorage.getItem('registrato');
//             }
//         }
//     });
// }
  
  

   @HostListener('window:storage')
  onStorageChange() {
    this.registrato = localStorage.getItem('registrato');
  }

  ngOnInit(): void {
  }

}

