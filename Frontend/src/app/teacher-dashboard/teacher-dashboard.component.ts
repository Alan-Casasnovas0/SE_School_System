import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Devoir, Note, User, Matiere } from '../services/interfaces';
import { createDevoir, createNote, getDevoirsByTeacherId, getNotesByTeacherId, getStudents, getUserById, getMatieres } from '../services/apiService';

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
  currentId: number = 0;
  assignments: Devoir[] = [];
  notes: Note[] = [];
  matieres: Matiere[] = [];
  students: User[] = [];

  ngOnInit(): void {
    this.currentId = parseInt(localStorage.getItem('currentUserID') || '0');
    this.assignments = this.fetchAssignments();
    this.notes = this.fetchNotes();
    this.fetchMatieres();
    this.fetchStudents();
  }

  fetchMatieres(): void {
    getMatieres().then(matieres => {
      this.matieres = matieres;
    }).catch(error => {
      console.error('Error fetching matieres:', error);
    });
  }

  fetchNotes(): Note[] {
    getNotesByTeacherId(this.currentId).then(notes => {
      const r_notes = notes.map((note: Note) => this.notes.push(note));
      // console.log('Notes for teacher ', this.currentId, ' :', r_notes);
      return r_notes;
    }).catch(error => {
      console.error('Error fetching student notes:', error);
    });
    return [];
  }

  fetchAssignments(): Devoir[] {
    getDevoirsByTeacherId(this.currentId).then(devoirs => {
      const r_devoirs = devoirs.map((devoir: Devoir) => this.assignments.push(devoir));
      console.log('Assignments for teacher ', this.currentId, ' :', r_devoirs);
      return r_devoirs;
    }).catch(error => {
      console.error('Error fetching student assignments:', error);
    });
    return [];
  }

  getNotes(): Note[] {
    // console.log('Notes:', this.notes);
    return this.notes;
  }

  getAssignments(): Devoir[] {
    // console.log('Assignments:', this.assignments);
    return this.assignments;
  }


  // Variables pour saisir de nouvelles notes et devoirs
  newAssignmentTitle: string = '';
  newAssignmentDescription: string = '';
  newStudentId: number = -1;
  newAssignmentSubject: string = '';
  newStudentGrade: number = 0;
  selectedMatiereId: number = -1;

  addAssignment() {
    if (this.newAssignmentTitle && this.newAssignmentDescription && this.selectedMatiereId !== -1) {
      createDevoir({
        content: this.newAssignmentDescription,
        id_student: 4,
        id_teacher: this.currentId,
        id_matiere: this.selectedMatiereId
      }).then(devoir => {
        this.assignments = this.fetchAssignments();
        this.fetchMatieres();
        this.newAssignmentTitle = '';
        this.newAssignmentDescription = '';
        this.selectedMatiereId = -1;
        alert('Assignment added successfully');
      }).catch(error => { 
        console.error('Error creating assignment:', error); 
      });
    } else {
      alert('Please fill all fields including selecting a subject');
    }
  }

  addGrade() {
    if (this.newStudentId != -1 && 
        this.newStudentGrade >= 0 && 
        this.newStudentGrade <= 20 && 
        this.newAssignmentSubject &&
        this.selectedMatiereId !== -1) {
      
      createNote({
        name: this.newAssignmentSubject,
        valeur: this.newStudentGrade,
        id_student: this.newStudentId,
        id_teacher: this.currentId,
        id_matiere: this.selectedMatiereId
      }).then(note => {
        this.notes = this.fetchNotes();
        this.newStudentId = -1;
        this.newAssignmentSubject = '';
        this.newStudentGrade = 0;
        this.selectedMatiereId = -1;
        alert('Grade added successfully');
      }).catch(error => { console.error('Error creating grade:', error); });
    } else {
      alert('Please fill all fields including selecting a subject');
    }
  }

  getMatiereNameById(id: number): string {
    console.log('try to find matiere with id : ', id);
    console.log('all matieres : ', this.matieres);
    const matiere = this.matieres.find(m => m.matiere_id === id);
    return matiere ? matiere.nom : 'Unknown Subject';
  }

  fetchStudents(): void {
    getStudents().then(students => {
      this.students = students;
    }).catch(error => {
      console.error('Error fetching students:', error);
    });
  }

  getStudentFullName(student: User): string {
    return `${student.prenom} ${student.nom}`;
  }

  getStudentNameForNote(studentId: number): string {
    const student = this.students.find(s => s.user_id === studentId);
    return student ? this.getStudentFullName(student) : 'Unknown Student';
  }
}
