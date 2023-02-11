import { NabSideBarComponent } from './components/auth/nab-side-bar/nab-side-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { FormHomeComponent } from './components/pages/form-home/form-home.component';
import { FromCLienteComponent } from './components/pages/from-cliente/from-cliente.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo:'login' },
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: FormHomeComponent },
  { path: 'client', component: FromCLienteComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
