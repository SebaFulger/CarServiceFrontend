import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private auth: Auth) {}

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        console.log('Login reușit, token salvat');
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });
  }
}
