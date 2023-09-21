import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginmodel } from '../model/loginmodel';
import { DataService } from '../../service/dataservice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: DataService) {}
  user = { username: '', password: '' };
  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginModel: loginmodel = {
        userId: 0,
        firstName: '',
        lastName: '',
        username: this.user.username,
        password: this.user.password,
        gender: '',
        userTypeId: 0,
      };

      this.authService.login(loginModel).subscribe(
        (response) => {
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login failed', error);
          this.router.navigate(['/login-failed']);
        }
      );
    }
  }
}