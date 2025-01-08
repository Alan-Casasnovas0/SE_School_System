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
    id_matiere: number;
    valeur: number;
  }
  
export interface Devoir {
    id_devoir: number;
    id_student: number; // Foreign key
    id_teacher: number; // Foreign key
    id_matiere: number;
    content: string;
  }
  
export interface DemandeInscription {
    demande_id: number;
    lastName: string;
    firstName: string;
    email: string;
    mdp: string;
    id_specialite: number;
    grades: number;
  }

  export interface Internship {
    internship_id: number;
    id_student: number; // Foreign key
    company_name: string;
    start_date: string; // ISO 8601 format (e.g., "2024-04-01")
    end_date: string; // ISO 8601 format (e.g., "2024-09-01")
    description: string;
    status: 'pending' | 'approved' | 'rejected';
}

export interface Matiere {
  matiere_id: number;
  nom: string;
}

export interface Specialite {
  specialite_id: number;
  nom: string;
}
