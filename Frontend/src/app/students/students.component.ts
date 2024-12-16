import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  // Ajoutez ici les données des étudiants ou une autre logique nécessaire
  students = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' },
  ];

  // Vous pouvez afficher un message de succès ou d'erreur ici si nécessaire
  successMessage: string = '';
  errorMessage: string = '';
}
