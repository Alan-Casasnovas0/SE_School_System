"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.createNote = createNote;
exports.getNotes = getNotes;
exports.getNoteById = getNoteById;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;
exports.createDevoir = createDevoir;
exports.getDevoirs = getDevoirs;
exports.getDevoirById = getDevoirById;
exports.updateDevoir = updateDevoir;
exports.deleteDevoir = deleteDevoir;
exports.createDemandeInscription = createDemandeInscription;
exports.getDemandesInscription = getDemandesInscription;
exports.getDemandeInscriptionById = getDemandeInscriptionById;
exports.updateDemandeInscription = updateDemandeInscription;
exports.deleteDemandeInscription = deleteDemandeInscription;
// Users
let users = [
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
function createUser(user) {
    const newUser = Object.assign({ user_id: users.length + 1 }, user);
    users.push(newUser);
    return newUser;
}
// Read Users
function getUsers() {
    return users;
}
function getUserById(user_id) {
    return users.find(user => user.user_id === user_id);
}
// Update User
function updateUser(user_id, updatedUser) {
    const userIndex = users.findIndex(user => user.user_id === user_id);
    if (userIndex === -1) {
        return undefined;
    }
    users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), updatedUser);
    return users[userIndex];
}
// Delete User
function deleteUser(user_id) {
    const userIndex = users.findIndex(user => user.user_id === user_id);
    if (userIndex === -1) {
        return false;
    }
    users.splice(userIndex, 1);
    return true;
}
// Notes
let notes = [
    { id_note: 1, id_student: 2, id_teacher: 3, name: 'Math', valeur: 85 },
    { id_note: 2, id_student: 4, id_teacher: 5, name: 'Science', valeur: 90 },
    { id_note: 3, id_student: 6, id_teacher: 3, name: 'History', valeur: 78 },
    { id_note: 4, id_student: 8, id_teacher: 5, name: 'English', valeur: 88 },
    { id_note: 5, id_student: 10, id_teacher: 3, name: 'Geography', valeur: 92 },
    { id_note: 6, id_student: 2, id_teacher: 9, name: 'Biology', valeur: 80 },
    { id_note: 7, id_student: 4, id_teacher: 9, name: 'Chemistry', valeur: 85 },
    { id_note: 8, id_student: 6, id_teacher: 9, name: 'Physics', valeur: 75 },
    { id_note: 9, id_student: 8, id_teacher: 9, name: 'Art', valeur: 90 },
    { id_note: 10, id_student: 10, id_teacher: 9, name: 'Music', valeur: 88 }
];
function createNote(note) {
    const newNote = Object.assign({ id_note: notes.length + 1 }, note);
    notes.push(newNote);
    return newNote;
}
function getNotes() {
    return notes;
}
function getNoteById(id_note) {
    return notes.find(note => note.id_note === id_note);
}
function updateNote(id_note, updatedNote) {
    const noteIndex = notes.findIndex(note => note.id_note === id_note);
    if (noteIndex === -1) {
        return undefined;
    }
    notes[noteIndex] = Object.assign(Object.assign({}, notes[noteIndex]), updatedNote);
    return notes[noteIndex];
}
function deleteNote(id_note) {
    const noteIndex = notes.findIndex(note => note.id_note === id_note);
    if (noteIndex === -1) {
        return false;
    }
    notes.splice(noteIndex, 1);
    return true;
}
// Devoirs
let devoirs = [
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
function createDevoir(devoir) {
    const newDevoir = Object.assign({ id_devoir: devoirs.length + 1 }, devoir);
    devoirs.push(newDevoir);
    return newDevoir;
}
function getDevoirs() {
    return devoirs;
}
function getDevoirById(id_devoir) {
    return devoirs.find(devoir => devoir.id_devoir === id_devoir);
}
function updateDevoir(id_devoir, updatedDevoir) {
    const devoirIndex = devoirs.findIndex(devoir => devoir.id_devoir === id_devoir);
    if (devoirIndex === -1) {
        return undefined;
    }
    devoirs[devoirIndex] = Object.assign(Object.assign({}, devoirs[devoirIndex]), updatedDevoir);
    return devoirs[devoirIndex];
}
function deleteDevoir(id_devoir) {
    const devoirIndex = devoirs.findIndex(devoir => devoir.id_devoir === id_devoir);
    if (devoirIndex === -1) {
        return false;
    }
    devoirs.splice(devoirIndex, 1);
    return true;
}
// DemandeInscription
let demandesInscription = [
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
function createDemandeInscription(demande) {
    const newDemande = Object.assign({ demande_id: demandesInscription.length + 1 }, demande);
    demandesInscription.push(newDemande);
    return newDemande;
}
function getDemandesInscription() {
    return demandesInscription;
}
function getDemandeInscriptionById(demande_id) {
    return demandesInscription.find(demande => demande.demande_id === demande_id);
}
function updateDemandeInscription(demande_id, updatedDemande) {
    const demandeIndex = demandesInscription.findIndex(demande => demande.demande_id === demande_id);
    if (demandeIndex === -1) {
        return undefined;
    }
    demandesInscription[demandeIndex] = Object.assign(Object.assign({}, demandesInscription[demandeIndex]), updatedDemande);
    return demandesInscription[demandeIndex];
}
function deleteDemandeInscription(demande_id) {
    const demandeIndex = demandesInscription.findIndex(demande => demande.demande_id === demande_id);
    if (demandeIndex === -1) {
        return false;
    }
    demandesInscription.splice(demandeIndex, 1);
    return true;
}
//# sourceMappingURL=database.js.map