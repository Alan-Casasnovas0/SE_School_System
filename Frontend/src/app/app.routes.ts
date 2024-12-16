import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import {AuthGuard} from './auth/auth.guard';
import {TeacherGuard} from './auth/teacher.guard';
import {ManagerGuard} from './auth/manager.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teacher-login', component: TeacherLoginComponent },
  { path: 'manager-login', component: ManagerLoginComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent, canActivate: [AuthGuard] },
  { path: 'teacher-dashboard', component: TeacherDashboardComponent, canActivate: [AuthGuard, TeacherGuard] },
  { path: 'manager-dashboard', component: ManagerDashboardComponent, canActivate: [AuthGuard, ManagerGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}