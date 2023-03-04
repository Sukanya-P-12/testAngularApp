import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path: "ProgrammingLanguages",
    component: ProgrammingLanguagesComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
