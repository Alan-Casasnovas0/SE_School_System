import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: { name: string, role: string } | null = null;

  constructor() { }

  // Simuler une connexion avec un faux profil
  login(email: string, password: string, role: string): boolean {
    // Ici, tu peux remplacer par une vraie logique de vérification de l'email et du mot de passe
    if (email === 'student@example.com' && password === 'password123' && role === 'student') {
      this.currentUser = { name: 'Étudiant Test', role: 'student' };
      return true;
    }
    if (email === 'teacher@example.com' && password === 'password123' && role === 'teacher') {
      this.currentUser = { name: 'Professeur Test', role: 'teacher' };
      return true;
    }
    if (email === 'manager@example.com' && password === 'password123' && role === 'manager') {
      this.currentUser = { name: 'Manager Test', role: 'manager' };
      return true;
    }
    return false;
  }

  // Récupérer le nom de l'utilisateur connecté (étudiant, professeur, manager)
  getStudentName(): string {
    return this.currentUser?.name ?? 'Inconnu';
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
    return this.currentUser?.role === 'manager';
  }

  // Déconnexion
  logout(): void {
    this.currentUser = null;
  }
}
