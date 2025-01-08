import mysql from 'mysql2/promise';
import { User, Note, Devoir, DemandeInscription, Internship } from './interfaces';
import { dbConfig } from './config/database'; 


// Create connection pool
const pool = mysql.createPool(dbConfig);

// Users
export async function createUser(user: Omit<User, 'user_id'>): Promise<User> {
  const [result] = await pool.execute(
    'INSERT INTO users (nom, prenom, mail, mdp, role) VALUES (?, ?, ?, ?, ?)',
    [user.nom, user.prenom, user.mail, user.mdp, user.role]
  );
  const insertId = (result as mysql.ResultSetHeader).insertId;
  return { user_id: insertId, ...user };
}

export async function getUsers(): Promise<User[]> {
  const [rows] = await pool.execute('SELECT * FROM users');
  return rows as User[];
}

export async function getStudents(): Promise<User[]> {
  const [rows] = await pool.execute('SELECT * FROM users WHERE role = ?', ['student']);
  return rows as User[];
}

export async function getUserById(user_id: number): Promise<User | undefined> {
  const [rows] = await pool.execute('SELECT * FROM users WHERE user_id = ?', [user_id]);
  const users = rows as User[];
  return users[0];
}

export async function updateUser(
  user_id: number,
  updatedUser: Partial<Omit<User, 'user_id'>>
): Promise<User | undefined> {
  const fields = Object.keys(updatedUser)
    .map(key => `${key} = ?`)
    .join(', ');
  const values = [...Object.values(updatedUser), user_id];

  await pool.execute(`UPDATE users SET ${fields} WHERE user_id = ?`, values);
  return getUserById(user_id);
}

export async function deleteUser(user_id: number): Promise<boolean> {
  const [result] = await pool.execute('DELETE FROM users WHERE user_id = ?', [user_id]);
  return (result as mysql.ResultSetHeader).affectedRows > 0;
}

// Teachers and Admins
export async function getTeachers(): Promise<User[]> {
  const [rows] = await pool.execute('SELECT * FROM users WHERE role = ?', ['teacher']);
  return rows as User[];
}

export async function getAdmins(): Promise<User[]> {
  const [rows] = await pool.execute('SELECT * FROM users WHERE role = ?', ['admin']);
  return rows as User[];
}

// Notes
export async function createNote(note: Omit<Note, 'id_note'>): Promise<Note> {
  const [result] = await pool.execute(
    'INSERT INTO notes (id_student, id_teacher, id_matiere, valeur) VALUES (?, ?, ?, ?)',
    [note.id_student, note.id_teacher, note.id_matiere, note.valeur]
  );
  const insertId = (result as mysql.ResultSetHeader).insertId;
  return { id_note: insertId, ...note };
}

export async function getNotes(): Promise<Note[]> {
  const [rows] = await pool.execute('SELECT * FROM notes');
  return rows as Note[];
}

export async function getNoteById(id_note: number): Promise<Note | undefined> {
  const [rows] = await pool.execute('SELECT * FROM notes WHERE id_note = ?', [id_note]);
  const notes = rows as Note[];
  return notes[0];
}

export async function updateNote(
  id_note: number,
  updatedNote: Partial<Omit<Note, 'id_note'>>
): Promise<Note | undefined> {
  const fields = Object.keys(updatedNote)
    .map(key => `${key} = ?`)
    .join(', ');
  const values = [...Object.values(updatedNote), id_note];

  await pool.execute(`UPDATE notes SET ${fields} WHERE id_note = ?`, values);
  return getNoteById(id_note);
}

export async function deleteNote(id_note: number): Promise<boolean> {
  const [result] = await pool.execute('DELETE FROM notes WHERE id_note = ?', [id_note]);
  return (result as mysql.ResultSetHeader).affectedRows > 0;
}

// Devoirs
export async function createDevoir(devoir: Omit<Devoir, 'id_devoir'>): Promise<Devoir> {
  devoir.id_matiere = parseInt(devoir.id_matiere as any);
  console.log("createDevoir function : ", devoir);
  const [result] = await pool.execute(
    'INSERT INTO devoirs (id_student, id_teacher, id_matiere, content) VALUES (?, ?, ?, ?)',
    [devoir.id_student, devoir.id_teacher, devoir.id_matiere, devoir.content]
  );
  const insertId = (result as mysql.ResultSetHeader).insertId;
  return { id_devoir: insertId, ...devoir };
}

export async function getDevoirs(): Promise<Devoir[]> {
  const [rows] = await pool.execute('SELECT * FROM devoirs');
  return rows as Devoir[];
}

export async function getDevoirById(id_devoir: number): Promise<Devoir | undefined> {
  const [rows] = await pool.execute('SELECT * FROM devoirs WHERE id_devoir = ?', [id_devoir]);
  const devoirs = rows as Devoir[];
  return devoirs[0];
}

export async function updateDevoir(
  id_devoir: number,
  updatedDevoir: Partial<Omit<Devoir, 'id_devoir'>>
): Promise<Devoir | undefined> {
  const fields = Object.keys(updatedDevoir)
    .map(key => `${key} = ?`)
    .join(', ');
  const values = [...Object.values(updatedDevoir), id_devoir];

  await pool.execute(`UPDATE devoirs SET ${fields} WHERE id_devoir = ?`, values);
  return getDevoirById(id_devoir);
}

export async function deleteDevoir(id_devoir: number): Promise<boolean> {
  const [result] = await pool.execute('DELETE FROM devoirs WHERE id_devoir = ?', [id_devoir]);
  return (result as mysql.ResultSetHeader).affectedRows > 0;
}

// Demandes d'inscription
export async function createDemandeInscription(demande: Omit<DemandeInscription, 'demande_id'>): Promise<DemandeInscription> {
  const [result] = await pool.execute(
    'INSERT INTO demandes_inscription (lastName, firstName, email, mdp, id_specialite, grades) VALUES (?, ?, ?, ?, ?, ?)',
    [demande.lastName, demande.firstName, demande.email, demande.mdp, demande.id_specialite, demande.grades]
  );
  const insertId = (result as mysql.ResultSetHeader).insertId;
  return { demande_id: insertId, ...demande };
}

export async function getDemandesInscription(): Promise<DemandeInscription[]> {
  const [rows] = await pool.execute('SELECT * FROM demandes_inscription');
  return rows as DemandeInscription[];
}

export async function getDemandeInscriptionById(demande_id: number): Promise<DemandeInscription | undefined> {
  const [rows] = await pool.execute('SELECT * FROM demandes_inscription WHERE demande_id = ?', [demande_id]);
  const demandes = rows as DemandeInscription[];
  return demandes[0];
}

export async function updateDemandeInscription(
  demande_id: number,
  updatedDemande: Partial<Omit<DemandeInscription, 'demande_id'>>
): Promise<DemandeInscription | undefined> {
  const fields = Object.keys(updatedDemande)
    .map(key => `${key} = ?`)
    .join(', ');
  const values = [...Object.values(updatedDemande), demande_id];

  await pool.execute(`UPDATE demandes_inscription SET ${fields} WHERE demande_id = ?`, values);
  return getDemandeInscriptionById(demande_id);
}

export async function deleteDemandeInscription(demande_id: number): Promise<boolean> {
  const [result] = await pool.execute('DELETE FROM demandes_inscription WHERE demande_id = ?', [demande_id]);
  return (result as mysql.ResultSetHeader).affectedRows > 0;
}

// Internships
export async function createInternship(internship: Omit<Internship, 'internship_id'>): Promise<Internship> {
  const [result] = await pool.execute(
    'INSERT INTO internships (id_student, company_name, start_date, end_date, description, status) VALUES (?, ?, ?, ?, ?, ?)',
    [internship.id_student, internship.company_name, internship.start_date, internship.end_date, internship.description, internship.status]
  );
  const insertId = (result as mysql.ResultSetHeader).insertId;
  return { internship_id: insertId, ...internship };
}

export async function getInternships(): Promise<Internship[]> {
  const [rows] = await pool.execute('SELECT * FROM internships');
  return rows as Internship[];
}

export async function getInternshipById(internship_id: number): Promise<Internship | undefined> {
  const [rows] = await pool.execute('SELECT * FROM internships WHERE internship_id = ?', [internship_id]);
  const internships = rows as Internship[];
  return internships[0];
}

export async function getInternshipsByStudentId(student_id: number): Promise<Internship[]> {
  const [rows] = await pool.execute('SELECT * FROM internships WHERE id_student = ?', [student_id]);
  return rows as Internship[];
}

export async function updateInternship(
  internship_id: number,
  student_id: number,
  updatedInternship: Partial<Omit<Internship, 'internship_id'>>
): Promise<Internship | undefined> {
  const fields = Object.keys(updatedInternship)
    .map(key => `${key} = ?`)
    .join(', ');
  const values = [...Object.values(updatedInternship), internship_id];

  await pool.execute(`UPDATE internships SET ${fields} WHERE internship_id = ? AND id_student = ?`, [...values, student_id]);
  return getInternshipById(internship_id);
}

export async function deleteInternship(internship_id: number): Promise<boolean> {
  const [result] = await pool.execute('DELETE FROM internships WHERE internship_id = ?', [internship_id]);
  return (result as mysql.ResultSetHeader).affectedRows > 0;
}

// After other imports, add interfaces for the new tables
interface Matiere {
  matiere_id: number;
  nom: string;
}

interface Specialite {
  specialite_id: number;
  nom: string;
}

// Add these new functions after existing exports
export async function getMatieres(): Promise<Matiere[]> {
  const [rows] = await pool.execute('SELECT * FROM matieres');
  return rows as Matiere[];
}

export async function getMatiereById(matiere_id: number): Promise<Matiere | undefined> {
  const [rows] = await pool.execute('SELECT * FROM matieres WHERE matiere_id = ?', [matiere_id]);
  const matieres = rows as Matiere[];
  return matieres[0];
}

export async function getSpecialites(): Promise<Specialite[]> {
  const [rows] = await pool.execute('SELECT * FROM specialites');
  return rows as Specialite[];
}

export async function getSpecialiteById(specialite_id: number): Promise<Specialite | undefined> {
  const [rows] = await pool.execute('SELECT * FROM specialites WHERE specialite_id = ?', [specialite_id]);
  const specialites = rows as Specialite[];
  return specialites[0];
}

// Add some helpful join queries
export async function getNotesWithDetails(): Promise<any[]> {
  const [rows] = await pool.execute(`
    SELECT n.*, m.nom as matiere_nom, 
           u1.nom as student_nom, u1.prenom as student_prenom,
           u2.nom as teacher_nom, u2.prenom as teacher_prenom
    FROM notes n
    JOIN matieres m ON n.id_matiere = m.matiere_id
    JOIN users u1 ON n.id_student = u1.user_id
    JOIN users u2 ON n.id_teacher = u2.user_id
  `);
  return rows as any[];
}

export async function getDevoirsWithDetails(): Promise<any[]> {
  const [rows] = await pool.execute(`
    SELECT d.*, m.nom as matiere_nom,
           u1.nom as student_nom, u1.prenom as student_prenom,
           u2.nom as teacher_nom, u2.prenom as teacher_prenom
    FROM devoirs d
    JOIN matieres m ON d.id_matiere = m.matiere_id
    JOIN users u1 ON d.id_student = u1.user_id
    JOIN users u2 ON d.id_teacher = u2.user_id
  `);
  return rows as any[];
}

export async function getDemandesInscriptionWithSpecialite(): Promise<any[]> {
  const [rows] = await pool.execute(`
    SELECT d.*, s.nom as specialite_nom
    FROM demandes_inscription d
    JOIN specialites s ON d.id_specialite = s.specialite_id
  `);
  return rows as any[];
}
