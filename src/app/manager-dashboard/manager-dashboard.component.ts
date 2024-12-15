import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import {NgForOf} from '@angular/common';

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
  studentRequests = [
    { id: 1, name: 'Jean Dupont', email: 'jean.dupont@example.com', course: 'Mathématiques', grades: '15/20', status: 'En attente' },
    { id: 2, name: 'Alice Martin', email: 'alice.martin@example.com', course: 'Physique', grades: '12/20', status: 'En attente' },
  ];

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

  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void {
    // Charger les applications si nécessaire
    this.loadApplications();
  }

  loadApplications(): void {
    this.applicationService.getApplications().then((applications) => {
      this.studentRequests = [
        ...this.studentRequests,
        ...applications.map((application, index) => ({
          id: this.studentRequests.length + index + 1,
          name: `${application.firstName} ${application.lastName}`,
          email: application.email,
          course: application.course,
          grades: application.grades,
          status: 'En attente',
        })),
      ];
    });
  }

  acceptRequest(id: number): void {
    const request = this.studentRequests.find((req) => req.id === id);
    if (request) {
      request.status = 'Accepté';
    }
  }

  rejectRequest(id: number): void {
    const request = this.studentRequests.find((req) => req.id === id);
    if (request) {
      request.status = 'Refusé';
    }
  }
}
