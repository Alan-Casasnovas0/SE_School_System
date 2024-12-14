"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get("/api/liveness", (req, res) => {
    // Users
    const newUser = (0, database_1.createUser)({
        nom: 'Clark',
        prenom: 'Kent',
        mail: 'kent.clark@example.com',
        mdp: 'password11',
        role: 'student'
    });
    console.log('Created User:', newUser);
    const allUsers = (0, database_1.getUsers)();
    console.log('All Users:', allUsers);
    const user = (0, database_1.getUserById)(1);
    console.log('User with ID 1:', user);
    const updatedUser = (0, database_1.updateUser)(1, { nom: 'Doe', prenom: 'Jane' });
    console.log('Updated User:', updatedUser);
    const isUserDeleted = (0, database_1.deleteUser)(1);
    console.log('User Deleted:', isUserDeleted);
    const updatedUsers = (0, database_1.getUsers)();
    console.log('Updated Users List:', updatedUsers);
    // Notes
    const newNote = (0, database_1.createNote)({
        id_student: 6,
        id_teacher: 3,
        name: 'History',
        valeur: 78
    });
    console.log('Created Note:', newNote);
    const allNotes = (0, database_1.getNotes)();
    console.log('All Notes:', allNotes);
    const note = (0, database_1.getNoteById)(1);
    console.log('Note with ID 1:', note);
    const updatedNote = (0, database_1.updateNote)(1, { name: 'Math', valeur: 90 });
    console.log('Updated Note:', updatedNote);
    const isNoteDeleted = (0, database_1.deleteNote)(1);
    console.log('Note Deleted:', isNoteDeleted);
    const updatedNotes = (0, database_1.getNotes)();
    console.log('Updated Notes List:', updatedNotes);
    // Devoirs
    const newDevoir = (0, database_1.createDevoir)({
        id_student: 6,
        id_teacher: 3,
        subject: 'History',
        content: 'Essay on World War II'
    });
    console.log('Created Devoir:', newDevoir);
    const allDevoirs = (0, database_1.getDevoirs)();
    console.log('All Devoirs:', allDevoirs);
    const devoir = (0, database_1.getDevoirById)(1);
    console.log('Devoir with ID 1:', devoir);
    const updatedDevoir = (0, database_1.updateDevoir)(1, { subject: 'Mathematics', content: 'Solve the 5 equations' });
    console.log('Updated Devoir:', updatedDevoir);
    const isDevoirDeleted = (0, database_1.deleteDevoir)(1);
    console.log('Devoir Deleted:', isDevoirDeleted);
    const updatedDevoirs = (0, database_1.getDevoirs)();
    console.log('Updated Devoirs List:', updatedDevoirs);
    // Notes
    // Demande Inscription
    const newDemande = (0, database_1.createDemandeInscription)({
        nom: 'Lee',
        prenom: 'Susan',
        mail: 'susan.lee@example.com',
        mdp: 'password13',
        specialite: 'Mathematics',
        GPA: 3.7
    });
    console.log('Created DemandeInscription:', newDemande);
    const allDemandes = (0, database_1.getDemandesInscription)();
    console.log('All DemandesInscription:', allDemandes);
    const demande = (0, database_1.getDemandeInscriptionById)(1);
    console.log('DemandeInscription with ID 1:', demande);
    const updatedDemande = (0, database_1.updateDemandeInscription)(1, { nom: 'Garcia', prenom: 'Maria', specialite: 'Biology' });
    console.log('Updated DemandeInscription:', updatedDemande);
    const isDemandeDeleted = (0, database_1.deleteDemandeInscription)(1);
    console.log('DemandeInscription Deleted:', isDemandeDeleted);
    const updatedDemandes = (0, database_1.getDemandesInscription)();
    console.log('Updated DemandesInscription List:', updatedDemandes);
    res.status(200).send("OK");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map