import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {NgForOf} from '@angular/common';
import { getNotesByStudentId, getDevoirsByStudentId, getMatieres } from '../services/apiService';
import { Note, Devoir, Matiere } from '../services/interfaces';

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
  matieres: Matiere[] = [];
  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
    this.fetchMatieres();
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
      console.log("notes : ", notes);
      this.studentNotes = notes.map((note: Note) => this.getMatiereNameById(note.id_matiere)+' : '+note.valeur);
    }).catch(error => {
      console.error('Error fetching student notes:', error);
    });
  }
  
  fetchMatieres(): void {
    getMatieres().then(matieres => {
      this.matieres = matieres;
      console.log('matieres : ', this.matieres);
    }).catch(error => {
      console.error('Error fetching matieres:', error);
    });
  }
  getMatiereNameById(id: number): string {
    console.log('try to find matiere with id : ', id);
    console.log('all matieres : ', this.matieres);
    const matiere = this.matieres.find(m => m.matiere_id === id);
    return matiere ? matiere.nom : 'Unknown Subject';
  }

  fetchStudentAssignments(): void {
    getDevoirsByStudentId(this.studentID).then(devoirs => {
      this.studentAssignments = devoirs.map((devoir: Devoir) => this.getMatiereNameById(devoir.id_matiere)+' : '+devoir.content);
    }).catch(error => {
      console.error('Error fetching student assignments:', error);
    });
  }

  getStudentAssignments(): string[] {
    return this.studentAssignments.toString().split(',');
  }
}
