// src/services/apiService.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// Users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/students`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const getTeachers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/teachers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching teachers:', error);
    throw error;
  }
};

export const getAdmins = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/admins`);
    return response.data;
  } catch (error) {
    console.error('Error fetching admins:', error);
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

export const createUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUser = async (id: number, userData: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Notes
export const getNotes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const getNotesByStudentId = async (studentId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notes/student/${studentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notes by student ID:', error);
    throw error;
  }
};

export const getNotesByTeacherId = async (teacherId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notes/teacher/${teacherId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notes by teacher ID:', error);
    throw error;
  }
}

export const getNoteById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching note by ID:', error);
    throw error;
  }
};

export const createNote = async (noteData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/notes`, noteData);
    return response.data;
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
};

export const updateNote = async (id: number, noteData: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/notes/${id}`, noteData);
    return response.data;
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  }
};

export const deleteNote = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};

// Devoirs
export const getDevoirs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devoirs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching devoirs:', error);
    throw error;
  }
};

export const getDevoirById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devoirs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching devoir by ID:', error);
    throw error;
  }
};

export const getDevoirsByStudentId = async (studentId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devoirs/student/${studentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching devoirs by student ID:', error);
    throw error;
  }
}

export const getDevoirsByTeacherId = async (teacherId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devoirs/teacher/${teacherId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching devoirs by teacher ID:', error);
    throw error;
  }
}

export const createDevoir = async (devoirData: any) => {
  try {
    // console.log('Creating devoir:', devoirData);
    const response = await axios.post(`${API_BASE_URL}/devoirs`, devoirData);
    return response.data;
  } catch (error) {
    console.error('Error creating devoir:', error);
    throw error;
  }
};

export const updateDevoir = async (id: number, devoirData: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/devoirs/${id}`, devoirData);
    return response.data;
  } catch (error) {
    console.error('Error updating devoir:', error);
    throw error;
  }
};

export const deleteDevoir = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/devoirs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting devoir:', error);
    throw error;
  }
};

// Demandes d'inscription
export const getDemandesInscription = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/demandes-inscription`);
    return response.data;
  } catch (error) {
    console.error('Error fetching demandes inscription:', error);
    throw error;
  }
};

export const getDemandeInscriptionById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/demandes-inscription/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching demande inscription by ID:', error);
    throw error;
  }
};

export const createDemandeInscription = async (demandeData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/demandes-inscription`, demandeData);
    return response.data;
  } catch (error) {
    console.error('Error creating demande inscription:', error);
    throw error;
  }
};

export const updateDemandeInscription = async (id: number, demandeData: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/demandes-inscription/${id}`, demandeData);
    return response.data;
  } catch (error) {
    console.error('Error updating demande inscription:', error);
    throw error;
  }
};

export const deleteDemandeInscription = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/demandes-inscription/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting demande inscription:', error);
    throw error;
  }
};

// Internships
export const getInternships = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/internships`);
    return response.data;
  } catch (error) {
    console.error('Error fetching internships:', error);
    throw error;
  }
};

export const getInternshipById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/internships/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching internship by ID:', error);
    throw error;
  }
};

export const getInternshipsByStudentId = async (studentId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/internships/student/${studentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching internships by student ID:', error);
    throw error;
  }
};

export const createInternship = async (internshipData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/internships`, internshipData);
    return response.data;
  } catch (error) {
    console.error('Error creating internship:', error);
    throw error;
  }
};

export const updateInternship = async (id: number, internshipData: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/internships/${id}`, internshipData);
    return response.data;
  } catch (error) {
    console.error('Error updating internship:', error);
    throw error;
  }
};

export const deleteInternship = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/internships/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting internship:', error);
    throw error;
  }
};
