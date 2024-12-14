import { User, Note, Devoir, DemandeInscription } from './interfaces';


// Users
let users: User[] = [
    { user_id: 1, nom: 'Doe', prenom: 'John', mail: 'john.doe@example.com', mdp: 'password1', role: 'admin' },
    { user_id: 2, nom: 'Smith', prenom: 'Jane', mail: 'jane.smith@example.com', mdp: 'password2', role: 'student' },
    { user_id: 3, nom: 'Johnson', prenom: 'Mike', mail: 'mike.johnson@example.com', mdp: 'password3', role: 'teacher' },
    { user_id: 4, nom: 'Brown', prenom: 'Emily', mail: 'emily.brown@example.com', mdp: 'password4', role: 'student' },
    { user_id: 5, nom: 'Davis', prenom: 'Chris', mail: 'chris.davis@example.com', mdp: 'password5', role: 'teacher' },
    { user_id: 6, nom: 'Wilson', prenom: 'Sara', mail: 'sara.wilson@example.com', mdp: 'password6', role: 'student' },
    { user_id: 7, nom: 'Martinez', prenom: 'David', mail: 'david.martinez@example.com', mdp: 'password7', role: 'admin' },
    { user_id: 8, nom: 'Anderson', prenom: 'Laura', mail: 'laura.anderson@example.com', mdp: 'password8', role: 'student' },
    { user_id: 9, nom: 'Thomas', prenom: 'Paul', mail: 'paul.thomas@example.com', mdp: 'password9', role: 'teacher' },
    { user_id: 10, nom: 'Taylor', prenom: 'Lisa', mail: 'lisa.taylor@example.com', mdp: 'password10', role: 'student' }
  ];
  
  export function createUser(user: Omit<User, 'user_id'>): User {
    const newUser: User = {
      user_id: users.length + 1,
      ...user
    };
    users.push(newUser);
    return newUser;
  }
  
  // Read Users
  export function getUsers(): User[] {
    return users;
  }
  
  export function getUserById(user_id: number): User | undefined {
    return users.find(user => user.user_id === user_id);
  }
  
  // Update User
  export function updateUser(user_id: number, updatedUser: Partial<Omit<User, 'user_id'>>): User | undefined {
    const userIndex = users.findIndex(user => user.user_id === user_id);
    if (userIndex === -1) {
      return undefined;
    }
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    return users[userIndex];
  }
  
  // Delete User
  export function deleteUser(user_id: number): boolean {
    const userIndex = users.findIndex(user => user.user_id === user_id);
    if (userIndex === -1) {
      return false;
    }
    users.splice(userIndex, 1);
    return true;
  }



// Notes
  let notes: Note[] = [
    { id_note: 1, id_student: 2, id_teacher: 3, name: 'Math', valeur: 17 },
    { id_note: 2, id_student: 4, id_teacher: 5, name: 'Science', valeur: 18 },
    { id_note: 3, id_student: 6, id_teacher: 3, name: 'History', valeur: 15 },
    { id_note: 4, id_student: 8, id_teacher: 5, name: 'English', valeur: 16 },
    { id_note: 5, id_student: 10, id_teacher: 3, name: 'Geography', valeur: 19 },
    { id_note: 6, id_student: 2, id_teacher: 9, name: 'Biology', valeur: 14 },
    { id_note: 7, id_student: 4, id_teacher: 9, name: 'Chemistry', valeur: 17 },
    { id_note: 8, id_student: 6, id_teacher: 9, name: 'Physics', valeur: 13 },
    { id_note: 9, id_student: 8, id_teacher: 9, name: 'Art', valeur: 18 },
    { id_note: 10, id_student: 10, id_teacher: 9, name: 'Music', valeur: 16 }
  ];


  export function createNote(note: Omit<Note, 'id_note'>): Note {
    const newNote: Note = {
      id_note: notes.length + 1,
      ...note
    };
    notes.push(newNote);
    return newNote;
  }
  
  export function getNotes(): Note[] {
    return notes;
  }
  
  export function getNoteById(id_note: number): Note | undefined {
    return notes.find(note => note.id_note === id_note);
  }
  
  export function updateNote(id_note: number, updatedNote: Partial<Omit<Note, 'id_note'>>): Note | undefined {
    const noteIndex = notes.findIndex(note => note.id_note === id_note);
    if (noteIndex === -1) {
      return undefined;
    }
    notes[noteIndex] = { ...notes[noteIndex], ...updatedNote };
    return notes[noteIndex];
  }
  
  export function deleteNote(id_note: number): boolean {
    const noteIndex = notes.findIndex(note => note.id_note === id_note);
    if (noteIndex === -1) {
      return false;
    }
    notes.splice(noteIndex, 1);
    return true;
  }


  // Devoirs
let devoirs: Devoir[] = [
    { id_devoir: 1, id_student: 2, id_teacher: 3, subject: 'Math', content: 'Solve the equations' },
    { id_devoir: 2, id_student: 4, id_teacher: 5, subject: 'Science', content: 'Write a report on photosynthesis' },
    { id_devoir: 3, id_student: 6, id_teacher: 3, subject: 'History', content: 'Essay on World War II' },
    { id_devoir: 4, id_student: 8, id_teacher: 5, subject: 'English', content: 'Write a short story' },
    { id_devoir: 5, id_student: 10, id_teacher: 3, subject: 'Geography', content: 'Map of Europe' },
    { id_devoir: 6, id_student: 2, id_teacher: 9, subject: 'Biology', content: 'Cell structure diagram' },
    { id_devoir: 7, id_student: 4, id_teacher: 9, subject: 'Chemistry', content: 'Balancing chemical equations' },
    { id_devoir: 8, id_student: 6, id_teacher: 9, subject: 'Physics', content: 'Explain Newton\'s laws' },
    { id_devoir: 9, id_student: 8, id_teacher: 9, subject: 'Art', content: 'Draw a still life' },
    { id_devoir: 10, id_student: 10, id_teacher: 9, subject: 'Music', content: 'Compose a short melody' }
  ];
  

  export function createDevoir(devoir: Omit<Devoir, 'id_devoir'>): Devoir {
    const newDevoir: Devoir = {
      id_devoir: devoirs.length + 1,
      ...devoir
    };
    devoirs.push(newDevoir);
    return newDevoir;
  }
  
  export function getDevoirs(): Devoir[] {
    return devoirs;
  }
  
  export function getDevoirById(id_devoir: number): Devoir | undefined {
    return devoirs.find(devoir => devoir.id_devoir === id_devoir);
  }
  
  export function updateDevoir(id_devoir: number, updatedDevoir: Partial<Omit<Devoir, 'id_devoir'>>): Devoir | undefined {
    const devoirIndex = devoirs.findIndex(devoir => devoir.id_devoir === id_devoir);
    if (devoirIndex === -1) {
      return undefined;
    }
    devoirs[devoirIndex] = { ...devoirs[devoirIndex], ...updatedDevoir };
    return devoirs[devoirIndex];
  }
  
  export function deleteDevoir(id_devoir: number): boolean {
    const devoirIndex = devoirs.findIndex(devoir => devoir.id_devoir === id_devoir);
    if (devoirIndex === -1) {
      return false;
    }
    devoirs.splice(devoirIndex, 1);
    return true;
  }

  // DemandeInscription
  let demandesInscription: DemandeInscription[] = [
    { demande_id: 1, nom: 'Garcia', prenom: 'Maria', mail: 'maria.garcia@example.com', mdp: 'password11', specialite: 'Computer Science', GPA: 3.8 },
    { demande_id: 2, nom: 'Rodriguez', prenom: 'Carlos', mail: 'carlos.rodriguez@example.com', mdp: 'password12', specialite: 'Engineering', GPA: 3.9 },
    { demande_id: 3, nom: 'Lee', prenom: 'Susan', mail: 'susan.lee@example.com', mdp: 'password13', specialite: 'Mathematics', GPA: 3.7 },
    { demande_id: 4, nom: 'Walker', prenom: 'Robert', mail: 'robert.walker@example.com', mdp: 'password14', specialite: 'Physics', GPA: 3.6 },
    { demande_id: 5, nom: 'Hall', prenom: 'Megan', mail: 'megan.hall@example.com', mdp: 'password15', specialite: 'Chemistry', GPA: 3.8 },
    { demande_id: 6, nom: 'Allen', prenom: 'Brian', mail: 'brian.allen@example.com', mdp: 'password16', specialite: 'Biology', GPA: 3.9 },
    { demande_id: 7, nom: 'Young', prenom: 'Amy', mail: 'amy.young@example.com', mdp: 'password17', specialite: 'History', GPA: 3.7 },
    { demande_id: 8, nom: 'Hernandez', prenom: 'Jose', mail: 'jose.hernandez@example.com', mdp: 'password18', specialite: 'Literature', GPA: 3.6 },
    { demande_id: 9, nom: 'King', prenom: 'Emma', mail: 'emma.king@example.com', mdp: 'password19', specialite: 'Psychology', GPA: 3.8 },
    { demande_id: 10, nom: 'Wright', prenom: 'Samuel', mail: 'samuel.wright@example.com', mdp: 'password20', specialite: 'Economics', GPA: 3.9 }
  ];
  
  export function createDemandeInscription(demande: Omit<DemandeInscription, 'demande_id'>): DemandeInscription {
    const newDemande: DemandeInscription = {
      demande_id: demandesInscription.length + 1,
      ...demande
    };
    demandesInscription.push(newDemande);
    return newDemande;
  }
  
  export function getDemandesInscription(): DemandeInscription[] {
    return demandesInscription;
  }
  
  export function getDemandeInscriptionById(demande_id: number): DemandeInscription | undefined {
    return demandesInscription.find(demande => demande.demande_id === demande_id);
  }
  
  export function updateDemandeInscription(demande_id: number, updatedDemande: Partial<Omit<DemandeInscription, 'demande_id'>>): DemandeInscription | undefined {
    const demandeIndex = demandesInscription.findIndex(demande => demande.demande_id === demande_id);
    if (demandeIndex === -1) {
      return undefined;
    }
    demandesInscription[demandeIndex] = { ...demandesInscription[demandeIndex], ...updatedDemande };
    return demandesInscription[demandeIndex];
  }
  
  export function deleteDemandeInscription(demande_id: number): boolean {
    const demandeIndex = demandesInscription.findIndex(demande => demande.demande_id === demande_id);
    if (demandeIndex === -1) {
      return false;
    }
    demandesInscription.splice(demandeIndex, 1);
    return true;
  }


