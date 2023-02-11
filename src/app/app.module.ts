import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { FormHomeComponent } from './components/pages/form-home/form-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NabSideBarComponent } from './components/auth/nab-side-bar/nab-side-bar.component';
import { FromCLienteComponent } from './components/pages/from-cliente/from-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FormHomeComponent,
    NabSideBarComponent,
    FromCLienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
