import express from "express";
import cors from "cors";
import { createUser, getUsers, getUserById, updateUser, deleteUser, getStudents, getTeachers, getAdmins,
        updateNote, createNote, getNotes, getNoteById, deleteNote, 
        createDevoir, getDevoirs, getDevoirById, updateDevoir, deleteDevoir, 
        createDemandeInscription, getDemandesInscription, getDemandeInscriptionById, updateDemandeInscription, deleteDemandeInscription,
        createInternship, getInternships, getInternshipById, updateInternship, getInternshipsByStudentId,
        deleteInternship, getMatieres, getMatiereById, getSpecialites, getSpecialiteById,
        getNotesWithDetails, getDevoirsWithDetails, getDemandesInscriptionWithSpecialite
      } from "./database"; 

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/api/liveness", (req, res) => {
    res.status(200).send("OK");
});

// Users

// Get all users
app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

// Get all students
app.get('/students', async (req, res) => {
  const students = await getStudents();
  res.json(students);
});

// Get all teachers
app.get('/teachers', async (req, res) => {
  const teachers = await getTeachers();
  res.json(teachers);
});

// Get all admins
app.get('/admins', async (req, res) => {
  const admins = await getAdmins();
  res.json(admins);
});

// Get a user by ID
app.get('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = await getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Create a new user
app.post('/users', async (req, res) => {
  const newUser = await createUser(req.body);
  res.status(201).json(newUser);
});

// Update a user
app.put('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = await updateUser(userId, req.body);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user
app.delete('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const isDeleted = await deleteUser(userId);
  if (await isDeleted) {
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


// Notes

// Get all notes
app.get('/notes', async (req, res) => {
  const notes = await getNotes();
  res.json(notes);
});

// Get a note by ID
app.get('/notes/:id', async (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const note = await getNoteById(noteId);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});

// Create a new note
app.post('/notes', async (req, res) => {
  const newNote = await createNote(req.body);
  res.status(201).json(newNote);
});

// Update a note
app.put('/notes/:id', async (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const updatedNote = await updateNote(noteId, req.body);
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});

// Delete a note
app.delete('/notes/:id', async (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const isDeleted = await deleteNote(noteId);
  if (await isDeleted) {
    res.json({ message: 'Note deleted successfully' });
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});
// get notes by student id
app.get('/notes/student/:student_id', async (req, res) => {
  const studentId = parseInt(req.params.student_id, 10);
  const notes = await (await getNotes()).filter((note: { id_student: number; }) => note.id_student === studentId);
  res.json(notes);
});

// get notes by teacher id
app.get('/notes/teacher/:teacher_id', async (req, res) => {
  const teacherId = parseInt(req.params.teacher_id, 10);
  const notes = await (await getNotes()).filter((note: { id_teacher: number; }) => note.id_teacher === teacherId);
  res.json(notes);
});
  

// Devoirs
// Get all devoirs
app.get('/devoirs', async (req, res) => {
  const devoirs = await getDevoirs();
  res.json(devoirs);
});

// Get a devoir by ID
app.get('/devoirs/:id', async (req, res) => {
  const devoirId = parseInt(req.params.id, 10);
  const devoir = await getDevoirById(devoirId);
  if (devoir) {
    res.json(devoir);
  } else {
    res.status(404).json({ message: 'Devoir not found' });
  }
});

// Create a new devoir
app.post('/devoirs', async (req, res) => {
  const newDevoir = await createDevoir(req.body);
  res.status(201).json(newDevoir);
});

// Update a devoir
app.put('/devoirs/:id', async (req, res) => {
  const devoirId = parseInt(req.params.id, 10);
  const updatedDevoir = await updateDevoir(devoirId, req.body);
  if (updatedDevoir) {
    res.json(updatedDevoir);
  } else {
    res.status(404).json({ message: 'Devoir not found' });
  }
});

// Delete a devoir
app.delete('/devoirs/:id', async (req, res) => {
  const devoirId = parseInt(req.params.id, 10);
  const isDeleted = await deleteDevoir(devoirId);
  if (await isDeleted) {
    res.json({ message: 'Devoir deleted successfully' });
  } else {
    res.status(404).json({ message: 'Devoir not found' });
  }
});

// get devoirs by student id
app.get('/devoirs/student/:student_id', async (req, res) => {
  const studentId = parseInt(req.params.student_id, 10);
  const devoirs = await (await getDevoirs()).filter((devoir: { id_student: number; }) => devoir.id_student === studentId);
  res.json(devoirs);
});

// get devoirs by teacher id
app.get('/devoirs/teacher/:teacher_id', async (req, res) => {
  const teacherId = parseInt(req.params.teacher_id, 10);
  const devoirs = await (await getDevoirs()).filter((devoir: { id_teacher: number; }) => devoir.id_teacher === teacherId);
  res.json(devoirs);
});

// Demandes d'inscription

// Get all demandes inscription
app.get('/demandes-inscription', async (req, res) => {
  const demandesInscription = await getDemandesInscription();
  res.json(demandesInscription);
});

// Get a demande inscription by ID
app.get('/demandes-inscription/:id', async (req, res) => {
  const demandeId = parseInt(req.params.id, 10);
  const demande = await getDemandeInscriptionById(demandeId);
  if (demande) {
    res.json(demande);
  } else {
    res.status(404).json({ message: 'DemandeInscription not found' });
  }
});

// Create a new demande inscription
app.post('/demandes-inscription', async (req, res) => {
  const newDemande = await createDemandeInscription(req.body);
  res.status(201).json(newDemande);
});

// Update a demande inscription
app.put('/demandes-inscription/:id', async (req, res) => {
  const demandeId = parseInt(req.params.id, 10);
  const updatedDemande = await updateDemandeInscription(demandeId, req.body);
  if (updatedDemande) {
    res.json(updatedDemande);
  } else {
    res.status(404).json({ message: 'DemandeInscription not found' });
  }
});

// Delete a demande inscription
app.delete('/demandes-inscription/:id', async (req, res) => {
  const demandeId = parseInt(req.params.id, 10);
  const isDeleted = await deleteDemandeInscription(demandeId);
  if (await isDeleted) {
    res.json({ message: 'DemandeInscription deleted successfully' });
  } else {
    res.status(404).json({ message: 'DemandeInscription not found' });
  }
});


// Internships
// Get all internships
app.get('/internships', async (req, res) => {
  const internships = await getInternships();
  res.json(internships);
});

// Get an internship by ID
app.get('/internships/:id', async (req, res) => {
  const internshipId = parseInt(req.params.id, 10);
  const internship = await getInternshipById(internshipId);
  if (internship) {
    res.json(internship);
  } else {
    res.status(404).json({ message: 'Internship not found' });
  }
});

// Get internships by student ID
app.get('/internships/student/:student_id', async (req, res) => {
  const studentId = parseInt(req.params.student_id, 10);
  const internships = await getInternshipsByStudentId(studentId);
  res.json(internships);
});

// Create a new internship
app.post('/internships', async (req, res) => {
  const newInternship = await createInternship(req.body);
  res.status(201).json(newInternship);
});

// Update an internship
app.put('/internships/:id', async (req, res) => {
  const internshipId = parseInt(req.params.id, 10);
  const userId = parseInt(req.body.user_id, 10); // Assuming user_id is passed in the request body
  const updatedInternship = await updateInternship(internshipId, userId, req.body);
  if (updatedInternship) {
    res.json(updatedInternship);
  } else {
    res.status(404).json({ message: 'Internship not found' });
  }
});

// Delete an internship
app.delete('/internships/:id', async (req, res) => {
  const internshipId = parseInt(req.params.id, 10);
  const isDeleted = await deleteInternship(internshipId);
  if (await isDeleted) {
    res.json({ message: 'Internship deleted successfully' });
  } else {
    res.status(404).json({ message: 'Internship not found' });
  }
});

// Matieres
// Get all matieres
app.get('/matieres', async (req, res) => {
  const matieres = await getMatieres();
  res.json(matieres);
});

// Get a matiere by ID
app.get('/matieres/:id', async (req, res) => {
  const matiereId = parseInt(req.params.id, 10);
  const matiere = await getMatiereById(matiereId);
  if (matiere) {
    res.json(matiere);
  } else {
    res.status(404).json({ message: 'Matiere not found' });
  }
});

// Specialites
// Get all specialites
app.get('/specialites', async (req, res) => {
  const specialites = await getSpecialites();
  res.json(specialites);
});

// Get a specialite by ID
app.get('/specialites/:id', async (req, res) => {
  const specialiteId = parseInt(req.params.id, 10);
  const specialite = await getSpecialiteById(specialiteId);
  if (specialite) {
    res.json(specialite);
  } else {
    res.status(404).json({ message: 'Specialite not found' });
  }
});

// Add new endpoints
app.get('/notes/details', async (req, res) => {
  const notes = await getNotesWithDetails();
  res.json(notes);
});

app.get('/devoirs/details', async (req, res) => {
  const devoirs = await getDevoirsWithDetails();
  res.json(devoirs);
});

app.get('/demandes-inscription/details', async (req, res) => {
  const demandes = await getDemandesInscriptionWithSpecialite();
  res.json(demandes);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
