import { Injectable } from '@angular/core';
import { User } from '../services/interfaces';
import { getUsers } from '../services/apiService';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  currentUser: User | null = null;

  async login(email: string, password: string, role: string): Promise<boolean> {
    try {
      const users: User[] = await getUsers();
      const user = users.find(u => u.mail === email && u.mdp === password && u.role === role);

      if (user) {
        this.currentUser = user;
        localStorage.setItem('currentUserID', user.user_id.toString());
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error during login:', error);
      return false;
    }
  }

  // Récupérer le nom de l'utilisateur connecté (étudiant, professeur, manager)
  getStudentName(): string {
    return this.currentUser?.nom ?? 'Inconnu';
  }

  // Récupérer le rôle de l'utilisateur connecté
  getUserRole(): string {
    return this.currentUser?.role ?? 'Inconnu';
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  // Vérifier si l'utilisateur est un étudiant
  isStudent(): boolean {
    return this.currentUser?.role === 'student';
  }

  // Vérifier si l'utilisateur est un professeur
  isTeacher(): boolean {
    return this.currentUser?.role === 'teacher';
  }

  // Vérifier si l'utilisateur est un manager
  isManager(): boolean {
    return this.currentUser?.role === 'admin';
  }

  // Déconnexion
  logout(): void {
    this.currentUser = null;
  }
}