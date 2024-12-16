import { Injectable } from '@angular/core';
import { createDemandeInscription } from '../services/apiService';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private applications: any[] = [];

  submitApplication(application: any): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        createDemandeInscription(application)
        this.applications.push(application);
        console.log('Candidature soumise :', application);
        resolve();
      }, 1000);
    });
  }

  getApplications(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.applications);
      }, 500); // Simuler une requête réseau
    });
  }

  
}
