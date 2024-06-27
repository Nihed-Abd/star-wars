import { gql } from 'apollo-angular';

 const GET_ALL_FILMS = gql`
  query allFilms {
    allFilms {
      films {
        id
        title
        releaseDate
        director
        producers
      }
    }
  }
`;  
export {GET_ALL_FILMS};


const GET_ALL_VEHICULE = gql`
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
export {GET_ALL_VEHICULE};