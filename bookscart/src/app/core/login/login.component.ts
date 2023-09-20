import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { loginmodel } from '../model/loginmodel';
import { DataService } from '../../service/dataservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: DataService) {}

  // Method to handle login
  loginUser(username: string, password: string) {
    const loginModel: loginmodel = {
      userId: 0,
      firstName: '',
      lastName: '',
      username: username,
      password: password,
      gender: '',
      userTypeId: 0,
    };

    this.authService.login(loginModel).subscribe(
      (response) => {
        // Handle successful login response here
        console.log('hi');
        this.router.navigate(['/home']);
        console.log('hi');
      },
      (error) => {
        // Handle login error here
        console.error('Login failed', error);
        this.router.navigate(['/login-failed']);
      }
    );
  }
}
