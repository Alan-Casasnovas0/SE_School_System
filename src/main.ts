import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Importez le composant standalone AppComponent
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Importez vos routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Ajoutez vos routes
  ]
}).catch(err => console.error(err));
