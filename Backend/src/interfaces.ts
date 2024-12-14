// interfaces.ts
export interface User {
    user_id: number;
    nom: string;
    prenom: string;
    mail: string;
    mdp: string;
    role: 'admin' | 'student' | 'teacher';
  }
  
export interface Note {
    id_note: number;
    id_student: number; // Foreign key
    id_teacher: number; // Foreign key
    name: string;
    valeur: number;
  }
  
export interface Devoir {
    id_devoir: number;
    id_student: number; // Foreign key
    id_teacher: number; // Foreign key
    subject: string;
    content: string;
  }
  
export interface DemandeInscription {
    demande_id: number;
    nom: string;
    prenom: string;
    mail: string;
    mdp: string;
    specialite: string;
    GPA: number;
  }
  