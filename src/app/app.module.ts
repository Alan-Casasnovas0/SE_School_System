import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';

// Importation des composants standalone
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { NavbarComponent } from './navbar/navbar.component';

// Module principal
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    // Importation des composants standalone dans le module
    AppComponent,
    HomeComponent,
    StudentRegistrationComponent,
    TeacherLoginComponent,
    ManagerLoginComponent,
    NavbarComponent
  ],
  // bootstrap: [AppComponent]  // Utilisation du composant standalone AppComponent
})
export class AppModule { }
