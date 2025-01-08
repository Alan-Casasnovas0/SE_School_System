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
exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getStudents = getStudents;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getTeachers = getTeachers;
exports.getAdmins = getAdmins;
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
exports.createInternship = createInternship;
exports.getInternships = getInternships;
exports.getInternshipById = getInternshipById;
exports.getInternshipsByStudentId = getInternshipsByStudentId;
exports.updateInternship = updateInternship;
exports.deleteInternship = deleteInternship;
exports.getMatieres = getMatieres;
exports.getMatiereById = getMatiereById;
exports.getSpecialites = getSpecialites;
exports.getSpecialiteById = getSpecialiteById;
exports.getNotesWithDetails = getNotesWithDetails;
exports.getDevoirsWithDetails = getDevoirsWithDetails;
exports.getDemandesInscriptionWithSpecialite = getDemandesInscriptionWithSpecialite;
const promise_1 = __importDefault(require("mysql2/promise"));
const database_1 = require("./config/database");
// Create connection pool
const pool = promise_1.default.createPool(database_1.dbConfig);
// Users
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result] = yield pool.execute('INSERT INTO users (nom, prenom, mail, mdp, role) VALUES (?, ?, ?, ?, ?)', [user.nom, user.prenom, user.mail, user.mdp, user.role]);
        const insertId = result.insertId;
        return Object.assign({ user_id: insertId }, user);
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM users');
        return rows;
    });
}
function getStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM users WHERE role = ?', ['student']);
        return rows;
    });
}
function getUserById(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM users WHERE user_id = ?', [user_id]);
        const users = rows;
        return users[0];
    });
}
function updateUser(user_id, updatedUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const fields = Object.keys(updatedUser)
            .map(key => `${key} = ?`)
            .join(', ');
        const values = [...Object.values(updatedUser), user_id];
        yield pool.execute(`UPDATE users SET ${fields} WHERE user_id = ?`, values);
        return getUserById(user_id);
    });
}
function deleteUser(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result] = yield pool.execute('DELETE FROM users WHERE user_id = ?', [user_id]);
        return result.affectedRows > 0;
    });
}
// Teachers and Admins
function getTeachers() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM users WHERE role = ?', ['teacher']);
        return rows;
    });
}
function getAdmins() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM users WHERE role = ?', ['admin']);
        return rows;
    });
}
// Notes
function createNote(note) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result] = yield pool.execute('INSERT INTO notes (id_student, id_teacher, id_matiere, valeur) VALUES (?, ?, ?, ?)', [note.id_student, note.id_teacher, note.id_matiere, note.valeur]);
        const insertId = result.insertId;
        return Object.assign({ id_note: insertId }, note);
    });
}
function getNotes() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM notes');
        return rows;
    });
}
function getNoteById(id_note) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM notes WHERE id_note = ?', [id_note]);
        const notes = rows;
        return notes[0];
    });
}
function updateNote(id_note, updatedNote) {
    return __awaiter(this, void 0, void 0, function* () {
        const fields = Object.keys(updatedNote)
            .map(key => `${key} = ?`)
            .join(', ');
        const values = [...Object.values(updatedNote), id_note];
        yield pool.execute(`UPDATE notes SET ${fields} WHERE id_note = ?`, values);
        return getNoteById(id_note);
    });
}
function deleteNote(id_note) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result] = yield pool.execute('DELETE FROM notes WHERE id_note = ?', [id_note]);
        return result.affectedRows > 0;
    });
}
// Devoirs
function createDevoir(devoir) {
    return __awaiter(this, void 0, void 0, function* () {
        devoir.id_matiere = parseInt(devoir.id_matiere);
        console.log("createDevoir function : ", devoir);
        const [result] = yield pool.execute('INSERT INTO devoirs (id_student, id_teacher, id_matiere, content) VALUES (?, ?, ?, ?)', [devoir.id_student, devoir.id_teacher, devoir.id_matiere, devoir.content]);
        const insertId = result.insertId;
        return Object.assign({ id_devoir: insertId }, devoir);
    });
}
function getDevoirs() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM devoirs');
        return rows;
    });
}
function getDevoirById(id_devoir) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM devoirs WHERE id_devoir = ?', [id_devoir]);
        const devoirs = rows;
        return devoirs[0];
    });
}
function updateDevoir(id_devoir, updatedDevoir) {
    return __awaiter(this, void 0, void 0, function* () {
        const fields = Object.keys(updatedDevoir)
            .map(key => `${key} = ?`)
            .join(', ');
        const values = [...Object.values(updatedDevoir), id_devoir];
        yield pool.execute(`UPDATE devoirs SET ${fields} WHERE id_devoir = ?`, values);
        return getDevoirById(id_devoir);
    });
}
function deleteDevoir(id_devoir) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result] = yield pool.execute('DELETE FROM devoirs WHERE id_devoir = ?', [id_devoir]);
        return result.affectedRows > 0;
    });
}
// Demandes d'inscription
function createDemandeInscription(demande) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result] = yield pool.execute('INSERT INTO demandes_inscription (lastName, firstName, email, mdp, id_specialite, grades) VALUES (?, ?, ?, ?, ?, ?)', [demande.lastName, demande.firstName, demande.email, demande.mdp, demande.id_specialite, demande.grades]);
        const insertId = result.insertId;
        return Object.assign({ demande_id: insertId }, demande);
    });
}
function getDemandesInscription() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM demandes_inscription');
        return rows;
    });
}
function getDemandeInscriptionById(demande_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM demandes_inscription WHERE demande_id = ?', [demande_id]);
        const demandes = rows;
        return demandes[0];
    });
}
function updateDemandeInscription(demande_id, updatedDemande) {
    return __awaiter(this, void 0, void 0, function* () {
        const fields = Object.keys(updatedDemande)
            .map(key => `${key} = ?`)
            .join(', ');
        const values = [...Object.values(updatedDemande), demande_id];
        yield pool.execute(`UPDATE demandes_inscription SET ${fields} WHERE demande_id = ?`, values);
        return getDemandeInscriptionById(demande_id);
    });
}
function deleteDemandeInscription(demande_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result] = yield pool.execute('DELETE FROM demandes_inscription WHERE demande_id = ?', [demande_id]);
        return result.affectedRows > 0;
    });
}
// Internships
function createInternship(internship) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result] = yield pool.execute('INSERT INTO internships (id_student, company_name, start_date, end_date, description, status) VALUES (?, ?, ?, ?, ?, ?)', [internship.id_student, internship.company_name, internship.start_date, internship.end_date, internship.description, internship.status]);
        const insertId = result.insertId;
        return Object.assign({ internship_id: insertId }, internship);
    });
}
function getInternships() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM internships');
        return rows;
    });
}
function getInternshipById(internship_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM internships WHERE internship_id = ?', [internship_id]);
        const internships = rows;
        return internships[0];
    });
}
function getInternshipsByStudentId(student_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM internships WHERE id_student = ?', [student_id]);
        return rows;
    });
}
function updateInternship(internship_id, student_id, updatedInternship) {
    return __awaiter(this, void 0, void 0, function* () {
        const fields = Object.keys(updatedInternship)
            .map(key => `${key} = ?`)
            .join(', ');
        const values = [...Object.values(updatedInternship), internship_id];
        yield pool.execute(`UPDATE internships SET ${fields} WHERE internship_id = ? AND id_student = ?`, [...values, student_id]);
        return getInternshipById(internship_id);
    });
}
function deleteInternship(internship_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result] = yield pool.execute('DELETE FROM internships WHERE internship_id = ?', [internship_id]);
        return result.affectedRows > 0;
    });
}
// Add these new functions after existing exports
function getMatieres() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM matieres');
        return rows;
    });
}
function getMatiereById(matiere_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM matieres WHERE matiere_id = ?', [matiere_id]);
        const matieres = rows;
        return matieres[0];
    });
}
function getSpecialites() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM specialites');
        return rows;
    });
}
function getSpecialiteById(specialite_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute('SELECT * FROM specialites WHERE specialite_id = ?', [specialite_id]);
        const specialites = rows;
        return specialites[0];
    });
}
// Add some helpful join queries
function getNotesWithDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute(`
    SELECT n.*, m.nom as matiere_nom, 
           u1.nom as student_nom, u1.prenom as student_prenom,
           u2.nom as teacher_nom, u2.prenom as teacher_prenom
    FROM notes n
    JOIN matieres m ON n.id_matiere = m.matiere_id
    JOIN users u1 ON n.id_student = u1.user_id
    JOIN users u2 ON n.id_teacher = u2.user_id
  `);
        return rows;
    });
}
function getDevoirsWithDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute(`
    SELECT d.*, m.nom as matiere_nom,
           u1.nom as student_nom, u1.prenom as student_prenom,
           u2.nom as teacher_nom, u2.prenom as teacher_prenom
    FROM devoirs d
    JOIN matieres m ON d.id_matiere = m.matiere_id
    JOIN users u1 ON d.id_student = u1.user_id
    JOIN users u2 ON d.id_teacher = u2.user_id
  `);
        return rows;
    });
}
function getDemandesInscriptionWithSpecialite() {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield pool.execute(`
    SELECT d.*, s.nom as specialite_nom
    FROM demandes_inscription d
    JOIN specialites s ON d.id_specialite = s.specialite_id
  `);
        return rows;
    });
}
//# sourceMappingURL=database.js.map