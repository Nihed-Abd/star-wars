# StarWarsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Project Description

StarWarsApp is a web application built with Angular, Apollo, and GraphQL, styled using Tailwind CSS. The application allows users to explore various aspects of the Star Wars universe, including vehicles, films, and characters. Users can navigate through different sections and view detailed information with a visually appealing and responsive design.

## Getting Started

### Prerequisites

- Node.js (version 12.x or higher)
- Angular CLI
- Git

### Installation

1. Clone the repository:
   Run `git clone https://github.com/Nihed-Abd/star-wars.git`
    Run `cd star-wars-app`

2. Install dependencies:
    `npm install`

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Steps to Create the Project

### 1. Creating the Angular Project

Run `ng new StarWarsApp`
Run `cd StarWarsApp`

### 2. Installing Dependencies

# Apollo and GraphQL

Run ``ng add apollo-angular``
Run `npm install apollo-angular-link-http apollo-client apollo-cache-inmemory graphql-tag graphql`

# Tailwind CSS

Run `npm install -D tailwindcss postcss autoprefixer`
Run `npx tailwindcss init`


### 3. Generating Components

`ng generate component nav-bar`
`ng generate component footer`
`ng generate component home`
`ng generate component vehicles-list`
`ng generate component films-list`
`ng generate component characters-list`
### 4. Setting Up GraphQL Data Fetching
Create a service for GraphQL queries (e.g., graphql.service.ts) and use Apollo to fetch data.

### 5. Customizing Tailwind CSS Template
Upload and customize a Tailwind CSS template to match your project needs. Integrate it into your Angular components.

### 6. Linking the Template with the Project
Ensure that your Angular components are styled using the customized Tailwind CSS template.

### 7. Testing the Project
Run the application and navigate to different sections to ensure that data fetching and UI are working as expected.

###### Additional Angular CLI Commands


# Code Scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`

# Build
Run `ng build` to build the project. The build artifacts will be stored in the dist/ directory.

# Running Unit Tests
Run `ng test` to execute the unit tests via Karma.

# Running End-to-End Tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


