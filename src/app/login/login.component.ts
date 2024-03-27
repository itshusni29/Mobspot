import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Validate username and password (this is just a basic example)
    if (this.username === 'admin' && this.password === 'password') {
      // Navigate to the home page or any other desired page upon successful login
      this.router.navigate(['/home']);
    } else {
      // Display error message for invalid credentials
      this.errorMessage = 'Invalid username or password';
    }
  }
}
