import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { CharactersListComponent } from './characters-list/characters-list.component'; // Assuming you have this component

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cars', component: VehiclesListComponent },
  { path: 'films', component: FilmsListComponent },
  { path: 'characters', component: CharactersListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

export { routes };
