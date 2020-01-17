import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './public/masterPage/footer/footer.component';
import { HeroComponent } from './public/masterPage/hero/hero.component';
import { NavbarComponent } from './public/masterPage/navbar/navbar.component';
import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeroComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
