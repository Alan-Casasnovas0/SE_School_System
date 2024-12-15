import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  role: string = 'student'; // Par défaut, le rôle est étudiant

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.authService.login(this.email, this.password, this.role)) {
      if (this.role === 'teacher') {
        this.router.navigate(['/teacher-dashboard']);
      } else if (this.role === 'manager') {
        this.router.navigate(['/manager-dashboard']);
      } else {
        this.router.navigate(['/student-dashboard']);
      }
    } else {
      alert('Invalid credentials!');
    }
  }
}
