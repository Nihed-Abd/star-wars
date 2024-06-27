import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Vehicle {
  id: string;
  name: string;
  model: string;
  vehicleClass: string;
  crew: string;
}

interface AllVehiclesResponse {
  allVehicles: {
    vehicles: Vehicle[];
  };
}

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VehiclesListComponent implements OnInit {
  error: string | null = null;
  vehicleList: Vehicle[] = [];
  filteredVehicleList: Vehicle[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchVehicles();
  }

  fetchVehicles() {
    const query = `
    query GetAllVehicles {
      allVehicles {
        vehicles {
          id
          name
          model
          vehicleClass
          crew
        }
      }
    }
    `;

    this.http.post<{ data: AllVehiclesResponse }>('https://swapi-graphql.netlify.app/.netlify/functions/index', { query })
      .subscribe({
        next: (response) => {
          this.vehicleList = response.data.allVehicles.vehicles;
          this.filteredVehicleList = this.vehicleList;
        },
        error: (err) => {
          this.error = err.message;
        }
      });
  }

  filterVehicles(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredVehicleList = this.vehicleList.filter(vehicle =>
      vehicle.name.toLowerCase().includes(query) ||
      vehicle.model.toLowerCase().includes(query) ||
      vehicle.vehicleClass.toLowerCase().includes(query)
    );
  }
}
