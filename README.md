# global-kitchen-api

# The Global Kitchen API

## Tech Stack

- **Runtime:** Node.js v20
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Configuration:** dotenv

## Features

- Full CRUD for recipes
- Filter recipes by category
- Schema validation and error handling
- 3-Tier layered architecture

## Installation & Setup

1. Clone: `git clone [your-repo-url]`
2. Install: `npm install`
3. Create `.env` with PORT and MONGODB_URI
4. Run: `npm run dev`

## API Endpoints

| Method | Endpoint     | Description                                 |
| ------ | ------------ | ------------------------------------------- |
| GET    | /recipes     | Get all recipes (filter: ?category=Italian) |
| POST   | /recipes     | Create a recipe                             |
| GET    | /recipes/:id | Get one recipe                              |
| PATCH  | /recipes/:id | Update a recipe                             |
| DELETE | /recipes/:id | Delete a recipe                             |
