import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    FormsModule,
    NgIf
  ]
})
export class HomeComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  specialite: string = '';
  grades: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private applicationService: ApplicationService, private router: Router) {}

  submitApplication(): void {
    if (this.firstName && this.lastName && this.email && this.specialite && this.grades && this.password) {
      const application = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        mdp: this.password,
        specialite: this.specialite,
        grades: this.grades,
      };

      this.applicationService
        .submitApplication(application)
        .then(() => {
          this.successMessage = 'Votre candidature a été soumise avec succès !';
          this.errorMessage = '';
          this.resetForm();
        })
        .catch(() => {
          this.errorMessage = 'Une erreur s\'est produite lors de la soumission.';
          this.successMessage = '';
        });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs.';
    }
  }

  private resetForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.specialite = '';
    this.grades = '';
  }
}
