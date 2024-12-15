import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  studentName: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.studentName = this.authService.getStudentName();
  }

  getStudentNotes(): string[] {
    return ['Math: 15/20', 'Science: 18/20'];
  }

  getStudentAssignments(): string[] {
    return ['Devoir de Mathématique', 'Devoir de Physique'];
  }
}
