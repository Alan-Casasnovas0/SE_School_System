import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Devoir, Note, User } from '../services/interfaces';
import { createDevoir, createNote, getDevoirsByTeacherId, getNotesByTeacherId, getStudents, getUserById } from '../services/apiService';


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

  ngOnInit(): void {
    this.currentId = parseInt(localStorage.getItem('currentUserID') || '0');
    this.assignments = this.fetchAssignments();
    this.notes = this.fetchNotes();
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
      // console.log('Assignments for teacher ', this.currentId, ' :', r_devoirs);
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

  // studentsNames: string[] = [];

  // getStudentName(id: number): string {
  //   if (this.studentsNames[id]) {
  //     return this.studentsNames[id];
  //   }
  //   let studentName: string = 'Student '+id;
  //   getUserById(id).then((student: User) => {
  //     studentName = student.nom + ' ' + student.prenom;
  //     console.log('Student:', studentName);
  //     this.studentsNames[id] = studentName;
  //     return studentName;
  //   }).catch(error => { console.error('Error fetching student:', error); });
  //   return studentName;
  // }

  // Variables pour saisir de nouvelles notes et devoirs
  newAssignmentTitle: string = '';
  newAssignmentDescription: string = '';
  newStudentId: number = -1;
  newAssignmentSubject: string = '';
  newStudentGrade: number = 0;

  addAssignment() {
    if (this.newAssignmentTitle && this.newAssignmentDescription) {
      let newDevoir: Devoir = { id_devoir: -1, subject: '', content: '', id_student: -1, id_teacher: -1 };
      createDevoir({
        subject: this.newAssignmentTitle,
        content: this.newAssignmentDescription,
        id_student: 0,
        id_teacher: this.currentId
      }).then(devoir => {
        newDevoir = devoir;
        // console.log('New assignment:', newDevoir);
        this.assignments = this.fetchAssignments();
        alert('Assignment added successfully');
      }).catch(error => { console.error('Error creating assignment:', error); });

    }
  }

  addGrade() {
    // console.log('Try adding New grade:', this.newStudentId, this.newAssignmentSubject, this.newStudentGrade);
    if (this.newStudentId != -1 && this.newStudentGrade >= 0 && this.newStudentGrade <= 20 && this.newAssignmentSubject) {
      // check if student exists
      let students_ids: number[] = [];
      getStudents().then((students) => {
        // console.log('Students:', students);
        students.map((student: User) => {
          // console.log('Student:', student, student.user_id);
          students_ids.push(student.user_id)
        });

        console.log('Students:', students_ids);
        if (students_ids.indexOf(this.newStudentId) === -1) {
          alert('Student not found');
          return;
        }
        let newNote: Note = { id_note: -1, name: 'a', valeur: 0, id_student: -1, id_teacher: -1 };
        createNote({
          name: this.newAssignmentSubject,
          valeur: this.newStudentGrade,
          id_student: this.newStudentId,
          id_teacher: this.currentId
        }).then(note => {
          newNote = note;
          // console.log('New grade:', newNote);
          this.notes = this.fetchNotes();
          alert('Grade added successfully');
        }).catch(error => { console.error('Error creating grade:', error); });
      }).catch(error => { console.error('Error fetching students:', error); });
    }
  }
}
