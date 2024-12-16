import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { NgForOf } from '@angular/common';
import { createUser, deleteDemandeInscription, getDemandeInscriptionById, getDemandesInscription, getStudents, getTeachers } from '../services/apiService';
import { DemandeInscription, User } from '../services/interfaces';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css'],
  imports: [
    NgForOf
  ]
})
export class ManagerDashboardComponent implements OnInit {
  // Exemples de demandes d'inscription
  studentRequests:DemandeInscription[] = [];
  studentList: User[] = [];
  teacherList: User[] = [];

  // Exemples de notes données par les enseignants
  studentGrades = [
    { name: 'Paul Durand', grades: ['15', '18', '14'] },
    { name: 'Marie Curie', grades: ['17', '20', '19'] },
  ];

  // Exemples de devoirs attribués
  assignments = [
    { title: 'Devoir de Physique', description: 'Analyse des ondes sonores' },
    { title: 'Exercice de Mathématiques', description: 'Résolution d\'équations différentielles' },
  ];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    // Charger les applications si nécessaire
    this.fetchApplications();
    this.fetchAllStudents();
    this.fetchAllTeachers();
  }

  fetchApplications(): void {
    getDemandesInscription().then((requests) => {
      this.studentRequests = requests;
    });
  }
  acceptRequest(id: number): void {
    let request: DemandeInscription;
    getDemandeInscriptionById(id).then((data) => {
      request = data;
      alert('Adding new student: ' + request.firstName + ' ' + request.lastName);
      console.log('Accepting request:', request);
      const user = {
        nom: request.lastName,
        prenom: request.firstName,
        mail: request.email,
        mdp: request.mdp,
        role: 'student',
      };
      createUser(user).then(() => {
        deleteDemandeInscription(id).then(() => {
          this.fetchApplications(); // Recharger les demandes après la suppression
          this.fetchAllStudents(); // Recharger la liste des étudiants
        });
      });
    });
  }

  rejectRequest(id: number): void {
    console.log('Rejecting request:', id);
    deleteDemandeInscription(id).then(() => {
      this.fetchApplications(); // Recharger les demandes après la suppression
    });
  }


  fetchAllStudents() {
    getStudents().then((students) => {
      console.log('Students:', students);
      this.studentList = students;
    });
  }
  fetchAllTeachers() {
    getTeachers().then((teacher) => {
      console.log('Teachers:', teacher);
      this.teacherList = teacher;
    });
  }

}
