import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component'; 
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component'; 
import { NavBarComponent } from './nav-bar/nav-bar.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule , FilmsListComponent, HttpClientModule, VehiclesListComponent , NavBarComponent , FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'star-wars-app';
}
