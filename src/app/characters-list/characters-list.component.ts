import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Character {
  name: string;
  gender: string;
  homeworld: { name: string };
  eyeColor: string;
  skinColor: string;
}

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CharactersListComponent implements OnInit {
  error: string | null = null;
  characterList: Character[] = [];
  filteredCharacterList: Character[] = [];
  activeCharacter: Character | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    const query = `
      query GetAllCharacters {
        allPeople {
          people {
            name
            gender
            homeworld {
              name
            }
            eyeColor
            skinColor
          }
        }
      }
    `;

    this.http.post<{ data: { allPeople: { people: Character[] } } }>('https://swapi-graphql.netlify.app/.netlify/functions/index', { query })
      .subscribe({
        next: (response) => {
          this.characterList = response.data.allPeople.people;
          this.filteredCharacterList = this.characterList;
        },
        error: (err) => {
          this.error = err.message;
        }
      });
  }

  setActiveCharacter(character: Character) {
    this.activeCharacter = character;
  }

  clearActiveCharacter() {
    this.activeCharacter = null;
  }

  filterCharacters(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredCharacterList = this.characterList.filter(character =>
      character.name.toLowerCase().includes(query)
    );
  }
}
