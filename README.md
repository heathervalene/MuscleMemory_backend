# MuscleMemory Backend API

This backend API is the server-side application for managing Muscle Memory and associated data for this MERN stack Application.

***

## API Routes

### List all Muscle Groups
- **Endpoint:** GET /
- **Description:** Retrieve a list of all muscle groups.
- **Controller Method:** MuscleGroup.Ctrl.index

### Movements related to specific muscle group
- **Endpoint:** GET /:id/movement
- **Description:** Retrieve detailed information about different movements related to a specific muscle group and filter by movement.
- **Controller Method:** MovementCtrl.show

### Create/Add/Update/Delete your own workout
- **Endpoint:**
  - POST /:id - Create a workout
  - PUT /:id - Update a workout
  - DELETE /:id - Delete a workout
- **Description:** Manage your own workouts.
- **Controller Methods:**
  - Create: WorkoutCtrl.create
  - Update: WorkoutCtrl.update
  - Delete: WorkoutCtrl.delete

***

## Installation Guide

- Clone this repository [here](https://github.com/heathervalene/MuscleMemory_backend)
- Navigate to the project directory: `cd MuscleMemory_backend`
- Run `npm install` to install all dependencies

***

## Entity Relationship Diagram

![ERD](https://i.imgur.com/ASp46qq.png)