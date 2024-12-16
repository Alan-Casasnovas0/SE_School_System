import express from "express";
import cors from "cors";
import { createUser, getUsers, getUserById, updateUser, deleteUser, getStudents, getTeachers, getAdmins,
        updateNote, createNote, getNotes, getNoteById, deleteNote, 
        createDevoir, getDevoirs, getDevoirById, updateDevoir, deleteDevoir, 
        createDemandeInscription, getDemandesInscription, getDemandeInscriptionById, updateDemandeInscription, deleteDemandeInscription,
        createInternship, getInternships, getInternshipById, updateInternship, getInternshipsByStudentId,
        deleteInternship
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
app.get('/users', (req, res) => {
  const users = getUsers();
  res.json(users);
});

// Get all students
app.get('/students', (req, res) => {
  const students = getStudents();
  res.json(students);
});

// Get all teachers
app.get('/teachers', (req, res) => {
  const teachers = getTeachers();
  res.json(teachers);
});

// Get all admins
app.get('/admins', (req, res) => {
  const admins = getAdmins();
  res.json(admins);
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = createUser(req.body);
  res.status(201).json(newUser);
});

// Update a user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = updateUser(userId, req.body);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const isDeleted = deleteUser(userId);
  if (isDeleted) {
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


// Notes

// Get all notes
app.get('/notes', (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

// Get a note by ID
app.get('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const note = getNoteById(noteId);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});

// Create a new note
app.post('/notes', (req, res) => {
  const newNote = createNote(req.body);
  res.status(201).json(newNote);
});

// Update a note
app.put('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const updatedNote = updateNote(noteId, req.body);
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const isDeleted = deleteNote(noteId);
  if (isDeleted) {
    res.json({ message: 'Note deleted successfully' });
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});
// get notes by student id
app.get('/notes/student/:student_id', (req, res) => {
  const studentId = parseInt(req.params.student_id, 10);
  const notes = getNotes().filter(note => note.id_student === studentId);
  res.json(notes);
});

// get notes by teacher id
app.get('/notes/teacher/:teacher_id', (req, res) => {
  const teacherId = parseInt(req.params.teacher_id, 10);
  const notes = getNotes().filter(note => note.id_teacher === teacherId);
  res.json(notes);
});


// Devoirs
// Get all devoirs
app.get('/devoirs', (req, res) => {
  const devoirs = getDevoirs();
  res.json(devoirs);
});

// Get a devoir by ID
app.get('/devoirs/:id', (req, res) => {
  const devoirId = parseInt(req.params.id, 10);
  const devoir = getDevoirById(devoirId);
  if (devoir) {
    res.json(devoir);
  } else {
    res.status(404).json({ message: 'Devoir not found' });
  }
});

// Create a new devoir
app.post('/devoirs', (req, res) => {
  const newDevoir = createDevoir(req.body);
  res.status(201).json(newDevoir);
});

// Update a devoir
app.put('/devoirs/:id', (req, res) => {
  const devoirId = parseInt(req.params.id, 10);
  const updatedDevoir = updateDevoir(devoirId, req.body);
  if (updatedDevoir) {
    res.json(updatedDevoir);
  } else {
    res.status(404).json({ message: 'Devoir not found' });
  }
});

// Delete a devoir
app.delete('/devoirs/:id', (req, res) => {
  const devoirId = parseInt(req.params.id, 10);
  const isDeleted = deleteDevoir(devoirId);
  if (isDeleted) {
    res.json({ message: 'Devoir deleted successfully' });
  } else {
    res.status(404).json({ message: 'Devoir not found' });
  }
});

// get devoirs by student id
app.get('/devoirs/student/:student_id', (req, res) => {
  const studentId = parseInt(req.params.student_id, 10);
  const devoirs = getDevoirs().filter(devoir => devoir.id_student === studentId);
  res.json(devoirs);
});

// get devoirs by teacher id
app.get('/devoirs/teacher/:teacher_id', (req, res) => {
  const teacherId = parseInt(req.params.teacher_id, 10);
  const devoirs = getDevoirs().filter(devoir => devoir.id_teacher === teacherId);
  res.json(devoirs);
});

// Demandes d'inscription

// Get all demandes inscription
app.get('/demandes-inscription', (req, res) => {
  const demandesInscription = getDemandesInscription();
  res.json(demandesInscription);
});

// Get a demande inscription by ID
app.get('/demandes-inscription/:id', (req, res) => {
  const demandeId = parseInt(req.params.id, 10);
  const demande = getDemandeInscriptionById(demandeId);
  if (demande) {
    res.json(demande);
  } else {
    res.status(404).json({ message: 'DemandeInscription not found' });
  }
});

// Create a new demande inscription
app.post('/demandes-inscription', (req, res) => {
  const newDemande = createDemandeInscription(req.body);
  res.status(201).json(newDemande);
});

// Update a demande inscription
app.put('/demandes-inscription/:id', (req, res) => {
  const demandeId = parseInt(req.params.id, 10);
  const updatedDemande = updateDemandeInscription(demandeId, req.body);
  if (updatedDemande) {
    res.json(updatedDemande);
  } else {
    res.status(404).json({ message: 'DemandeInscription not found' });
  }
});

// Delete a demande inscription
app.delete('/demandes-inscription/:id', (req, res) => {
  const demandeId = parseInt(req.params.id, 10);
  const isDeleted = deleteDemandeInscription(demandeId);
  if (isDeleted) {
    res.json({ message: 'DemandeInscription deleted successfully' });
  } else {
    res.status(404).json({ message: 'DemandeInscription not found' });
  }
});


// Internships
// Get all internships
app.get('/internships', (req, res) => {
  const internships = getInternships();
  res.json(internships);
});

// Get an internship by ID
app.get('/internships/:id', (req, res) => {
  const internshipId = parseInt(req.params.id, 10);
  const internship = getInternshipById(internshipId);
  if (internship) {
    res.json(internship);
  } else {
    res.status(404).json({ message: 'Internship not found' });
  }
});

// Get internships by student ID
app.get('/internships/student/:student_id', (req, res) => {
  const studentId = parseInt(req.params.student_id, 10);
  const internships = getInternshipsByStudentId(studentId);
  res.json(internships);
});

// Create a new internship
app.post('/internships', (req, res) => {
  const newInternship = createInternship(req.body);
  res.status(201).json(newInternship);
});

// Update an internship
app.put('/internships/:id', (req, res) => {
  const internshipId = parseInt(req.params.id, 10);
  const userId = parseInt(req.body.user_id, 10); // Assuming user_id is passed in the request body
  const updatedInternship = updateInternship(internshipId, userId, req.body);
  if (updatedInternship) {
    res.json(updatedInternship);
  } else {
    res.status(404).json({ message: 'Internship not found' });
  }
});

// Delete an internship
app.delete('/internships/:id', (req, res) => {
  const internshipId = parseInt(req.params.id, 10);
  const isDeleted = deleteInternship(internshipId);
  if (isDeleted) {
    res.json({ message: 'Internship deleted successfully' });
  } else {
    res.status(404).json({ message: 'Internship not found' });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
