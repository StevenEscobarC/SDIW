import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './public/masterPage/footer/footer.component';
import { HeroComponent } from './public/masterPage/hero/hero.component';
import { NavbarComponent } from './public/masterPage/navbar/navbar.component';
import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';




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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  providers: [],
  exports:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
