import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {NgForOf} from '@angular/common';
import { getNotesByStudentId, getDevoirsByStudentId } from '../services/apiService';
import { Note, Devoir } from '../services/interfaces';

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
  studentNotes: string[] = [];
  studentAssignments: string[] = [];
  studentID: number = 0;
  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
    this.studentName = this.authService.getStudentName();
    this.studentID = parseInt(localStorage.getItem('currentUserID') || '0');
    this.fetchStudentNotes();
    this.fetchStudentAssignments();
    console.log('Student ID:', this.studentID);
    console.log('Student Name:', this.studentName);
    console.log('Student Notes:', this.studentNotes);
  }

  getStudentNotes(): string[] {
    return this.studentNotes.toString().split(',');
  }

  fetchStudentNotes(): void {
    getNotesByStudentId(this.studentID).then(notes => {
      this.studentNotes = notes.map((note: Note) => note.name+' : '+note.valeur);
    }).catch(error => {
      console.error('Error fetching student notes:', error);
    });
  }


  fetchStudentAssignments(): void {
    getDevoirsByStudentId(this.studentID).then(devoirs => {
      this.studentAssignments = devoirs.map((devoir: Devoir) => 'Assignment: '+devoir.subject+' : '+devoir.content);
    }).catch(error => {
      console.error('Error fetching student assignments:', error);
    });
  }

  getStudentAssignments(): string[] {
    return this.studentAssignments.toString().split(',');
  }
}
