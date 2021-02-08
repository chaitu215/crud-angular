import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../app/login/login.component"
import { CrudComponent } from "../app/crud/crud.component";
import { FormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [    RouterModule.forRoot([
    { path: "crud", component: CrudComponent },
    { path: "login", component: LoginComponent},
    { path: "**", redirectTo: "login" }
  ]),
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
