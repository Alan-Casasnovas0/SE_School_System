import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  specialite: string = '';

  onSubmit() {
    console.log('Nom:', this.nom);
    console.log('Prénom:', this.prenom);
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
    console.log('Spécialité:', this.specialite);
  }
}
