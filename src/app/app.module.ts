import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardEventoComponent } from './card-evento/card-evento.component';
import { EventiComponent } from './eventi/eventi.component';
import { LoginComponent } from './login/login.component';
import { EventoComponent } from './evento/evento.component';
import { RegistrationComponent } from './registration/registration.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardEventoComponent,
    HomeComponent,
    EventiComponent,
    LoginComponent,
    EventoComponent,
    RegistrationComponent,
    PrenotazioneComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent},
        { path: 'eventi/:typology', component: EventiComponent},
        { path: 'login', component: LoginComponent },
        { path: 'registration', component: RegistrationComponent },
        { path: 'evento/:id', component: EventoComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
