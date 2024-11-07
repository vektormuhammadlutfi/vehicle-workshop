# Vehicle Workshop

## Overview

This is a simple web application that allows you to create and manage vehicles.

(Explanation about the repo structure)

## Links

- API...
- Web...

## Features

- Add, update, and delete vehicle records.
- Search and filter vehicles based on various criteria (e.g., model, year, status).
- User authentication and authorization.
- Detailed vehicle information and maintenance history.

## Specification

(Links to the specification documents/diagrams)

## Tech Stack

### Frontend Web

- JavaScript/TypeScript
- HTML
- CSS
- Tailwind CSS
- Bun
- React
- React Router

### Backend Web

- JavaScript/TypeScript
- Bun
- Hono
- Docker
  - for App?
  - for Database?
- Prisma
- PostgreSQL / MySQL
- REST API
  - OpenAPI with Swagger

Service/App Hosting Recommendations:

- Fast + Cheap: Render.com / Deno Deploy
- Good: VPS (DigitalOcean, Linode, Lightsail) with Docker

Database Hosting Recommendations:

- Fast: Render.com Postgres
- Cheap/Free + Good + Fast: Neon.tech / Supabase / Xata.io / Tembo.io
- Very Good: VPS (DigitalOcean, Linode, Lightsail) with Docker
- Slow + Good + Cheap: Company's Server

## Reasonings

Why using Bun or Deno?

- Performance benchmark: https://youtube.com/watch?v=yJmyYosyDDM
- Productivity: ...
- Time is money: ...

## API Documentation/Specification

| Endpoint      | Method | Description                          |
|---------------|--------|--------------------------------------|
| /vehicles     | GET    | Get all vehicles                     |
| /vehicles     | POST   | Add a new vehicle                    |
| /vehicles/:id | GET    | Get details for a specific vehicle   |
| /vehicles/:id | PUT    | Update a specific vehicle            |
| /vehicles/:id | DELETE | Delete a specific vehicle            |
| /users        | GET    | Get all users                        |
| /users        | POST   | Register a new user                  |
| /auth/login   | POST   | User login                           |
| /auth/logout  | POST   | User logout                          |



## API Documentation/Specification

#### Vehicle Brands
- **`/vehicle-brands`**
  - **GET**: Retrieves a list of all vehicle brands.
  - **POST**: Creates a new vehicle brand by providing brand details in the request body.

- **`/vehicle-brands/:id`**
  - **GET**: Retrieves details of a specific vehicle brand identified by its ID.
  - **PUT**: Updates the details of a specific vehicle brand identified by its ID.
  - **DELETE**: Deletes a specific vehicle brand identified by its ID.

#### Vehicle Models
- **`/vehicle-models`**
  - **GET**: Retrieves a list of all vehicle models.
  - **POST**: Creates a new vehicle model by providing model details in the request body.

- **`/vehicle-models/:id`**
  - **GET**: Retrieves details of a specific vehicle model identified by its ID.
  - **PUT**: Updates the details of a specific vehicle model identified by its ID.
  - **DELETE**: Deletes a specific vehicle model identified by its ID.

#### Vehicle Types
- **`/vehicle-types`**
  - **GET**: Retrieves a list of all vehicle types.
  - **POST**: Creates a new vehicle type by providing type details in the request body.

- **`/vehicle-types/:id`**
  - **GET**: Retrieves details of a specific vehicle type identified by its ID.
  - **PUT**: Updates the details of a specific vehicle type identified by its ID.
  - **DELETE**: Deletes a specific vehicle type identified by its ID.
