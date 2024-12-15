import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/students'; // URL de l'API backend (temporaire ici)

  constructor(private http: HttpClient) {}

  registerStudent(student: any): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }
}
