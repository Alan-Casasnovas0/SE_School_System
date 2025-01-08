import { Injectable } from '@angular/core';
import { createDemandeInscription } from './apiService';
import { DemandeInscription } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  async submitApplication(application: DemandeInscription): Promise<any> {
    try {
      // Ensure all required fields are present and properly formatted
      const formattedApplication = {
        firstName: application.firstName,
        lastName: application.lastName,
        email: application.email,
        mdp: application.mdp,
        id_specialite: application.id_specialite,
        grades: Number(application.grades) // Ensure grades is a number
      };

      // Validate no undefined values
      Object.entries(formattedApplication).forEach(([key, value]) => {
        if (value === undefined || value === null) {
          throw new Error(`Missing required field: ${key}`);
        }
      });

      return await createDemandeInscription(formattedApplication);
    } catch (error) {
      console.error('Error in submitApplication:', error);
      throw error;
    }
  }
}
