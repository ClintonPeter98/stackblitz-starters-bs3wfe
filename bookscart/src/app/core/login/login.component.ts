import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginmodel, userDetails } from '../model/loginmodel';
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
      const loginModel: userDetails = {
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
          console.log(response.userDetails.userId.toString());
          sessionStorage.setItem(
            'userId',
            response.userDetails.userId.toString()
          );

          this.router.navigate(['/home']);
        },
        (error) => {
          this.authService.logout();
          this.authService.openNotification('Login failed.');
          this.router.navigate(['/login-failed']);
        }
      );
    }
  }
}
