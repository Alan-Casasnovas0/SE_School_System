"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/api/liveness", (req, res) => {
    res.status(200).send("OK");
});
// Users
// Get all users
app.get('/users', (req, res) => {
    const users = (0, database_1.getUsers)();
    res.json(users);
});
// Get all students
app.get('/students', (req, res) => {
    const students = (0, database_1.getStudents)();
    res.json(students);
});
// Get all teachers
app.get('/teachers', (req, res) => {
    const teachers = (0, database_1.getTeachers)();
    res.json(teachers);
});
// Get all admins
app.get('/admins', (req, res) => {
    const admins = (0, database_1.getAdmins)();
    res.json(admins);
});
// Get a user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = (0, database_1.getUserById)(userId);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
// Create a new user
app.post('/users', (req, res) => {
    const newUser = (0, database_1.createUser)(req.body);
    res.status(201).json(newUser);
});
// Update a user
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const updatedUser = (0, database_1.updateUser)(userId, req.body);
    if (updatedUser) {
        res.json(updatedUser);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
// Delete a user
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const isDeleted = (0, database_1.deleteUser)(userId);
    if (isDeleted) {
        res.json({ message: 'User deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
// Notes
// Get all notes
app.get('/notes', (req, res) => {
    const notes = (0, database_1.getNotes)();
    res.json(notes);
});
// Get a note by ID
app.get('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id, 10);
    const note = (0, database_1.getNoteById)(noteId);
    if (note) {
        res.json(note);
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
});
// Create a new note
app.post('/notes', (req, res) => {
    const newNote = (0, database_1.createNote)(req.body);
    res.status(201).json(newNote);
});
// Update a note
app.put('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id, 10);
    const updatedNote = (0, database_1.updateNote)(noteId, req.body);
    if (updatedNote) {
        res.json(updatedNote);
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
});
// Delete a note
app.delete('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id, 10);
    const isDeleted = (0, database_1.deleteNote)(noteId);
    if (isDeleted) {
        res.json({ message: 'Note deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
});
// get notes by student id
app.get('/notes/student/:student_id', (req, res) => {
    const studentId = parseInt(req.params.student_id, 10);
    const notes = (0, database_1.getNotes)().filter(note => note.id_student === studentId);
    res.json(notes);
});
// get notes by teacher id
app.get('/notes/teacher/:teacher_id', (req, res) => {
    const teacherId = parseInt(req.params.teacher_id, 10);
    const notes = (0, database_1.getNotes)().filter(note => note.id_teacher === teacherId);
    res.json(notes);
});
// Devoirs
// Get all devoirs
app.get('/devoirs', (req, res) => {
    const devoirs = (0, database_1.getDevoirs)();
    res.json(devoirs);
});
// Get a devoir by ID
app.get('/devoirs/:id', (req, res) => {
    const devoirId = parseInt(req.params.id, 10);
    const devoir = (0, database_1.getDevoirById)(devoirId);
    if (devoir) {
        res.json(devoir);
    }
    else {
        res.status(404).json({ message: 'Devoir not found' });
    }
});
// Create a new devoir
app.post('/devoirs', (req, res) => {
    const newDevoir = (0, database_1.createDevoir)(req.body);
    res.status(201).json(newDevoir);
});
// Update a devoir
app.put('/devoirs/:id', (req, res) => {
    const devoirId = parseInt(req.params.id, 10);
    const updatedDevoir = (0, database_1.updateDevoir)(devoirId, req.body);
    if (updatedDevoir) {
        res.json(updatedDevoir);
    }
    else {
        res.status(404).json({ message: 'Devoir not found' });
    }
});
// Delete a devoir
app.delete('/devoirs/:id', (req, res) => {
    const devoirId = parseInt(req.params.id, 10);
    const isDeleted = (0, database_1.deleteDevoir)(devoirId);
    if (isDeleted) {
        res.json({ message: 'Devoir deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Devoir not found' });
    }
});
// get devoirs by student id
app.get('/devoirs/student/:student_id', (req, res) => {
    const studentId = parseInt(req.params.student_id, 10);
    const devoirs = (0, database_1.getDevoirs)().filter(devoir => devoir.id_student === studentId);
    res.json(devoirs);
});
// get devoirs by teacher id
app.get('/devoirs/teacher/:teacher_id', (req, res) => {
    const teacherId = parseInt(req.params.teacher_id, 10);
    const devoirs = (0, database_1.getDevoirs)().filter(devoir => devoir.id_teacher === teacherId);
    res.json(devoirs);
});
// Demandes d'inscription
// Get all demandes inscription
app.get('/demandes-inscription', (req, res) => {
    const demandesInscription = (0, database_1.getDemandesInscription)();
    res.json(demandesInscription);
});
// Get a demande inscription by ID
app.get('/demandes-inscription/:id', (req, res) => {
    const demandeId = parseInt(req.params.id, 10);
    const demande = (0, database_1.getDemandeInscriptionById)(demandeId);
    if (demande) {
        res.json(demande);
    }
    else {
        res.status(404).json({ message: 'DemandeInscription not found' });
    }
});
// Create a new demande inscription
app.post('/demandes-inscription', (req, res) => {
    const newDemande = (0, database_1.createDemandeInscription)(req.body);
    res.status(201).json(newDemande);
});
// Update a demande inscription
app.put('/demandes-inscription/:id', (req, res) => {
    const demandeId = parseInt(req.params.id, 10);
    const updatedDemande = (0, database_1.updateDemandeInscription)(demandeId, req.body);
    if (updatedDemande) {
        res.json(updatedDemande);
    }
    else {
        res.status(404).json({ message: 'DemandeInscription not found' });
    }
});
// Delete a demande inscription
app.delete('/demandes-inscription/:id', (req, res) => {
    const demandeId = parseInt(req.params.id, 10);
    const isDeleted = (0, database_1.deleteDemandeInscription)(demandeId);
    if (isDeleted) {
        res.json({ message: 'DemandeInscription deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'DemandeInscription not found' });
    }
});
// Internships
// Get all internships
app.get('/internships', (req, res) => {
    const internships = (0, database_1.getInternships)();
    res.json(internships);
});
// Get an internship by ID
app.get('/internships/:id', (req, res) => {
    const internshipId = parseInt(req.params.id, 10);
    const internship = (0, database_1.getInternshipById)(internshipId);
    if (internship) {
        res.json(internship);
    }
    else {
        res.status(404).json({ message: 'Internship not found' });
    }
});
// Get internships by student ID
app.get('/internships/student/:student_id', (req, res) => {
    const studentId = parseInt(req.params.student_id, 10);
    const internships = (0, database_1.getInternshipsByStudentId)(studentId);
    res.json(internships);
});
// Create a new internship
app.post('/internships', (req, res) => {
    const newInternship = (0, database_1.createInternship)(req.body);
    res.status(201).json(newInternship);
});
// Update an internship
app.put('/internships/:id', (req, res) => {
    const internshipId = parseInt(req.params.id, 10);
    const userId = parseInt(req.body.user_id, 10); // Assuming user_id is passed in the request body
    const updatedInternship = (0, database_1.updateInternship)(internshipId, userId, req.body);
    if (updatedInternship) {
        res.json(updatedInternship);
    }
    else {
        res.status(404).json({ message: 'Internship not found' });
    }
});
// Delete an internship
app.delete('/internships/:id', (req, res) => {
    const internshipId = parseInt(req.params.id, 10);
    const isDeleted = (0, database_1.deleteInternship)(internshipId);
    if (isDeleted) {
        res.json({ message: 'Internship deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Internship not found' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map