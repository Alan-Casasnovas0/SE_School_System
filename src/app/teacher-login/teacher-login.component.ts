import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  imports: [
    FormsModule,
    NgIf
  ]
})
export class TeacherLoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    const role = 'teacher';  // Définir le rôle comme 'teacher'
    if (await this.authService.login(this.email, this.password, role)) {
      this.router.navigate(['/dashboard/teacher']);
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
