import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css'],
  imports: [
    FormsModule,
    NgForOf
  ]
})
export class TeacherDashboardComponent {
  assignments: { title: string; description: string }[] = [
    { title: 'Devoir Mathématiques', description: 'Exercice sur les fonctions.' },
    { title: 'Devoir Informatique', description: 'Projet Angular.' },
  ];

  studentGrades: { name: string; grades: number[] }[] = [
    { name: 'Alice Dupont', grades: [16, 18, 15] },
    { name: 'Jean Martin', grades: [12, 14, 13] },
  ];

  // Variables pour saisir de nouvelles notes et devoirs
  newAssignmentTitle: string = '';
  newAssignmentDescription: string = '';
  newStudentName: string = '';
  newStudentGrade: number = 0;

  addAssignment() {
    if (this.newAssignmentTitle && this.newAssignmentDescription) {
      this.assignments.push({
        title: this.newAssignmentTitle,
        description: this.newAssignmentDescription,
      });
      this.newAssignmentTitle = '';
      this.newAssignmentDescription = '';
    }
  }

  addGrade() {
    if (this.newStudentName && this.newStudentGrade > 0) {
      const student = this.studentGrades.find(
        (s) => s.name === this.newStudentName
      );
      if (student) {
        student.grades.push(this.newStudentGrade);
      } else {
        this.studentGrades.push({
          name: this.newStudentName,
          grades: [this.newStudentGrade],
        });
      }
      this.newStudentName = '';
      this.newStudentGrade = 0;
    }
  }
}
