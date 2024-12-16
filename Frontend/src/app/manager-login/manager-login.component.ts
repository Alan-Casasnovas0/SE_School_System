import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  imports: [
    FormsModule,
    NgIf
  ]
})
export class ManagerLoginComponent {
  email = '';         // Déclarer la variable email
  password = '';      // Déclarer la variable password
  errorMessage = '';  // Déclarer la variable errorMessage

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    const role = 'manager';  // Définir le rôle comme 'manager'
    if (await this.authService.login(this.email, this.password, role)) {
      this.router.navigate(['/dashboard/manager']);
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
