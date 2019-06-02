import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AutenticService } from './usuario/login/autentic.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuarioModule } from './usuario/usuario.module';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    routing,
    FormsModule,
    CommonModule,
    // HttpModule,
    HttpClientModule,
    UsuarioModule
  ],
  providers: [AutenticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
