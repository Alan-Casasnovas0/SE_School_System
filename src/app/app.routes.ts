import { Routes } from '@angular/router';
import { StudentComponent } from './modules/student/student.component';
import { AdminComponent } from './modules/admin/admin.component';
import { TeacherComponent } from './modules/teacher/teacher.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: '**', component: PageNotFoundComponent }
];

