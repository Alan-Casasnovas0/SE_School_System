import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes'; // import routes from app.routes.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Pass the routes configuration to RouterModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
