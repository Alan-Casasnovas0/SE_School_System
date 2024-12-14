import express from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser, 
        updateNote, createNote, getNotes, getNoteById, deleteNote, 
        createDevoir, getDevoirs, getDevoirById, updateDevoir, deleteDevoir, 
        createDemandeInscription,
        getDemandesInscription,
        getDemandeInscriptionById,
        updateDemandeInscription,
        deleteDemandeInscription} from "./database"; 

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/liveness", (req, res) => {
    
    // Users
    const newUser = createUser({
        nom: 'Clark',
        prenom: 'Kent',
        mail: 'kent.clark@example.com',
        mdp: 'password11',
        role: 'student'
      });
      console.log('Created User:', newUser);
      
      const allUsers = getUsers();
      console.log('All Users:', allUsers);
      
      const user = getUserById(1);
      console.log('User with ID 1:', user);
      
      const updatedUser = updateUser(1, { nom: 'Doe', prenom: 'Jane' });
      console.log('Updated User:', updatedUser);
      
      const isUserDeleted = deleteUser(1);
      console.log('User Deleted:', isUserDeleted);
      
      const updatedUsers = getUsers();
      console.log('Updated Users List:', updatedUsers);

      
    // Notes
    const newNote = createNote({
        id_student: 6,
        id_teacher: 3,
        name: 'History',
        valeur: 78
      });
      console.log('Created Note:', newNote);
      
      const allNotes = getNotes();
      console.log('All Notes:', allNotes);
      
      const note = getNoteById(1);
      console.log('Note with ID 1:', note);
      
      const updatedNote = updateNote(1, { name: 'Math', valeur: 90 });
      console.log('Updated Note:', updatedNote);
      
      const isNoteDeleted = deleteNote(1);
      console.log('Note Deleted:', isNoteDeleted);
      
      const updatedNotes = getNotes();
      console.log('Updated Notes List:', updatedNotes);



    // Devoirs
    const newDevoir = createDevoir({
        id_student: 6,
        id_teacher: 3,
        subject: 'History',
        content: 'Essay on World War II'
      });
      console.log('Created Devoir:', newDevoir);
      
      const allDevoirs = getDevoirs();
      console.log('All Devoirs:', allDevoirs);
      
      const devoir = getDevoirById(1);
      console.log('Devoir with ID 1:', devoir);
      
      const updatedDevoir = updateDevoir(1, { subject: 'Mathematics', content: 'Solve the 5 equations' });
      console.log('Updated Devoir:', updatedDevoir);
      
      const isDevoirDeleted = deleteDevoir(1);
      console.log('Devoir Deleted:', isDevoirDeleted);
      
      const updatedDevoirs = getDevoirs();
      console.log('Updated Devoirs List:', updatedDevoirs);


    // Notes
    
    // Demande Inscription


    const newDemande = createDemandeInscription({
        nom: 'Lee',
        prenom: 'Susan',
        mail: 'susan.lee@example.com',
        mdp: 'password13',
        specialite: 'Mathematics',
        GPA: 3.7
      });
      console.log('Created DemandeInscription:', newDemande);
      
      const allDemandes = getDemandesInscription();
      console.log('All DemandesInscription:', allDemandes);
      
      const demande = getDemandeInscriptionById(1);
      console.log('DemandeInscription with ID 1:', demande);
      
      const updatedDemande = updateDemandeInscription(1, { nom: 'Garcia', prenom: 'Maria', specialite: 'Biology' });
      console.log('Updated DemandeInscription:', updatedDemande);
      
      const isDemandeDeleted = deleteDemandeInscription(1);
      console.log('DemandeInscription Deleted:', isDemandeDeleted);
      
      const updatedDemandes = getDemandesInscription();
      console.log('Updated DemandesInscription List:', updatedDemandes);


    res.status(200).send("OK");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
