import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Film {
  title: string;
  releaseDate: string;
  director: string;
  producers: string[];
}

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FilmsListComponent implements OnInit {
  error: string | null = null;
  filmList: Film[] = [];
  activeFilm: Film | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchFilms();
  }

  fetchFilms() {
    const query = `
      query GetAllFilms {
        allFilms {
          films {
            title
            releaseDate
            director
            producers
          }
        }
      }
    `;

    this.http.post<{ data: { allFilms: { films: Film[] } } }>('https://swapi-graphql.netlify.app/.netlify/functions/index', { query })
      .subscribe({
        next: (response) => {
          this.filmList = response.data.allFilms.films;
        },
        error: (err) => {
          this.error = err.message;
        }
      });
  }

  setActiveFilm(film: Film) {
    this.activeFilm = film;
  }

  clearActiveFilm() {
    this.activeFilm = null;
  }
}
