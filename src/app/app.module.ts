import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { ComprasComponent } from './components/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalComponent,
    AboutUsComponent,
    MenuComponent,
    FooterComponent,
    ContactoComponent,
    CardsComponent,
    ComprasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ComprasComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
