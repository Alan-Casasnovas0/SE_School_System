"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, database_1.getUsers)();
    res.json(users);
}));
// Get all students
app.get('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield (0, database_1.getStudents)();
    res.json(students);
}));
// Get all teachers
app.get('/teachers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teachers = yield (0, database_1.getTeachers)();
    res.json(teachers);
}));
// Get all admins
app.get('/admins', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield (0, database_1.getAdmins)();
    res.json(admins);
}));
// Get a user by ID
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id, 10);
    const user = yield (0, database_1.getUserById)(userId);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
}));
// Create a new user
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, database_1.createUser)(req.body);
    res.status(201).json(newUser);
}));
// Update a user
app.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id, 10);
    const updatedUser = yield (0, database_1.updateUser)(userId, req.body);
    if (updatedUser) {
        res.json(updatedUser);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
}));
// Delete a user
app.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id, 10);
    const isDeleted = yield (0, database_1.deleteUser)(userId);
    if (yield isDeleted) {
        res.json({ message: 'User deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
}));
// Notes
// Get all notes
app.get('/notes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, database_1.getNotes)();
    res.json(notes);
}));
// Get a note by ID
app.get('/notes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = parseInt(req.params.id, 10);
    const note = yield (0, database_1.getNoteById)(noteId);
    if (note) {
        res.json(note);
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
}));
// Create a new note
app.post('/notes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newNote = yield (0, database_1.createNote)(req.body);
    res.status(201).json(newNote);
}));
// Update a note
app.put('/notes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = parseInt(req.params.id, 10);
    const updatedNote = yield (0, database_1.updateNote)(noteId, req.body);
    if (updatedNote) {
        res.json(updatedNote);
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
}));
// Delete a note
app.delete('/notes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = parseInt(req.params.id, 10);
    const isDeleted = yield (0, database_1.deleteNote)(noteId);
    if (yield isDeleted) {
        res.json({ message: 'Note deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
}));
// get notes by student id
app.get('/notes/student/:student_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentId = parseInt(req.params.student_id, 10);
    const notes = yield (yield (0, database_1.getNotes)()).filter((note) => note.id_student === studentId);
    res.json(notes);
}));
// get notes by teacher id
app.get('/notes/teacher/:teacher_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teacherId = parseInt(req.params.teacher_id, 10);
    const notes = yield (yield (0, database_1.getNotes)()).filter((note) => note.id_teacher === teacherId);
    res.json(notes);
}));
// Devoirs
// Get all devoirs
app.get('/devoirs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const devoirs = yield (0, database_1.getDevoirs)();
    res.json(devoirs);
}));
// Get a devoir by ID
app.get('/devoirs/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const devoirId = parseInt(req.params.id, 10);
    const devoir = yield (0, database_1.getDevoirById)(devoirId);
    if (devoir) {
        res.json(devoir);
    }
    else {
        res.status(404).json({ message: 'Devoir not found' });
    }
}));
// Create a new devoir
app.post('/devoirs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newDevoir = yield (0, database_1.createDevoir)(req.body);
    res.status(201).json(newDevoir);
}));
// Update a devoir
app.put('/devoirs/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const devoirId = parseInt(req.params.id, 10);
    const updatedDevoir = yield (0, database_1.updateDevoir)(devoirId, req.body);
    if (updatedDevoir) {
        res.json(updatedDevoir);
    }
    else {
        res.status(404).json({ message: 'Devoir not found' });
    }
}));
// Delete a devoir
app.delete('/devoirs/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const devoirId = parseInt(req.params.id, 10);
    const isDeleted = yield (0, database_1.deleteDevoir)(devoirId);
    if (yield isDeleted) {
        res.json({ message: 'Devoir deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Devoir not found' });
    }
}));
// get devoirs by student id
app.get('/devoirs/student/:student_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentId = parseInt(req.params.student_id, 10);
    const devoirs = yield (yield (0, database_1.getDevoirs)()).filter((devoir) => devoir.id_student === studentId);
    res.json(devoirs);
}));
// get devoirs by teacher id
app.get('/devoirs/teacher/:teacher_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teacherId = parseInt(req.params.teacher_id, 10);
    const devoirs = yield (yield (0, database_1.getDevoirs)()).filter((devoir) => devoir.id_teacher === teacherId);
    res.json(devoirs);
}));
// Demandes d'inscription
// Get all demandes inscription
app.get('/demandes-inscription', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const demandesInscription = yield (0, database_1.getDemandesInscription)();
    res.json(demandesInscription);
}));
// Get a demande inscription by ID
app.get('/demandes-inscription/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const demandeId = parseInt(req.params.id, 10);
    const demande = yield (0, database_1.getDemandeInscriptionById)(demandeId);
    if (demande) {
        res.json(demande);
    }
    else {
        res.status(404).json({ message: 'DemandeInscription not found' });
    }
}));
// Create a new demande inscription
app.post('/demandes-inscription', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newDemande = yield (0, database_1.createDemandeInscription)(req.body);
    res.status(201).json(newDemande);
}));
// Update a demande inscription
app.put('/demandes-inscription/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const demandeId = parseInt(req.params.id, 10);
    const updatedDemande = yield (0, database_1.updateDemandeInscription)(demandeId, req.body);
    if (updatedDemande) {
        res.json(updatedDemande);
    }
    else {
        res.status(404).json({ message: 'DemandeInscription not found' });
    }
}));
// Delete a demande inscription
app.delete('/demandes-inscription/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const demandeId = parseInt(req.params.id, 10);
    const isDeleted = yield (0, database_1.deleteDemandeInscription)(demandeId);
    if (yield isDeleted) {
        res.json({ message: 'DemandeInscription deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'DemandeInscription not found' });
    }
}));
// Internships
// Get all internships
app.get('/internships', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const internships = yield (0, database_1.getInternships)();
    res.json(internships);
}));
// Get an internship by ID
app.get('/internships/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const internshipId = parseInt(req.params.id, 10);
    const internship = yield (0, database_1.getInternshipById)(internshipId);
    if (internship) {
        res.json(internship);
    }
    else {
        res.status(404).json({ message: 'Internship not found' });
    }
}));
// Get internships by student ID
app.get('/internships/student/:student_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentId = parseInt(req.params.student_id, 10);
    const internships = yield (0, database_1.getInternshipsByStudentId)(studentId);
    res.json(internships);
}));
// Create a new internship
app.post('/internships', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newInternship = yield (0, database_1.createInternship)(req.body);
    res.status(201).json(newInternship);
}));
// Update an internship
app.put('/internships/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const internshipId = parseInt(req.params.id, 10);
    const userId = parseInt(req.body.user_id, 10); // Assuming user_id is passed in the request body
    const updatedInternship = yield (0, database_1.updateInternship)(internshipId, userId, req.body);
    if (updatedInternship) {
        res.json(updatedInternship);
    }
    else {
        res.status(404).json({ message: 'Internship not found' });
    }
}));
// Delete an internship
app.delete('/internships/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const internshipId = parseInt(req.params.id, 10);
    const isDeleted = yield (0, database_1.deleteInternship)(internshipId);
    if (yield isDeleted) {
        res.json({ message: 'Internship deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Internship not found' });
    }
}));
// Matieres
// Get all matieres
app.get('/matieres', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const matieres = yield (0, database_1.getMatieres)();
    res.json(matieres);
}));
// Get a matiere by ID
app.get('/matieres/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const matiereId = parseInt(req.params.id, 10);
    const matiere = yield (0, database_1.getMatiereById)(matiereId);
    if (matiere) {
        res.json(matiere);
    }
    else {
        res.status(404).json({ message: 'Matiere not found' });
    }
}));
// Specialites
// Get all specialites
app.get('/specialites', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const specialites = yield (0, database_1.getSpecialites)();
    res.json(specialites);
}));
// Get a specialite by ID
app.get('/specialites/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const specialiteId = parseInt(req.params.id, 10);
    const specialite = yield (0, database_1.getSpecialiteById)(specialiteId);
    if (specialite) {
        res.json(specialite);
    }
    else {
        res.status(404).json({ message: 'Specialite not found' });
    }
}));
// Add new endpoints
app.get('/notes/details', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, database_1.getNotesWithDetails)();
    res.json(notes);
}));
app.get('/devoirs/details', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const devoirs = yield (0, database_1.getDevoirsWithDetails)();
    res.json(devoirs);
}));
app.get('/demandes-inscription/details', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const demandes = yield (0, database_1.getDemandesInscriptionWithSpecialite)();
    res.json(demandes);
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map