import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { AppRoutingModule } from './app.routes'; 
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiclesListComponent,
    FilmsListComponent,
    NavBarComponent,
    FooterComponent,
    CharactersListComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule, 
    HttpClientModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
