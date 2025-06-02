# Microservices Frontend

This is the frontend application for the Microservices project, built with Angular 15.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v15)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Angular CLI globally (if not already installed):
```bash
npm install -g @angular/cli@15
```

## Running the Application

1. Start the backend server first (make sure it's running on port 3000)

2. Start the Angular development server:
```bash
ng serve
```

3. Open your browser and navigate to:
- Default: `http://localhost:4200`
- If port 4200 is in use, the CLI will suggest an alternative port (e.g., `http://localhost:53756`)

## Features

- User authentication (login/register)
- Product listing
- Shopping cart functionality
- Order management

## Project Structure

- `src/app/components/` - Angular components
- `src/app/services/` - Service classes for API communication
- `src/app/models/` - TypeScript interfaces and models
- `src/app/interceptors/` - HTTP interceptors

## Dependencies

- Angular 15.2.9
- Bootstrap 5.3.1
- Font Awesome
- RxJS

## Development

The application uses:
- Reactive Forms for form handling
- HTTP Client for API communication
- Router for navigation
- Bootstrap for styling
