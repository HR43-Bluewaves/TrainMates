# Train Me, Mate

Train Me, Mate is a legacy team-built prototype for discovering fitness trainers and classes. The app has a React client and an Express API backed by PostgreSQL, with Firebase Storage wired in for media.

This repository reflects a short sprint project, not a production-ready service. Authentication, security, deployment, and automated testing are incomplete.

## Features

- Browse trainers and classes, and view trainer and class details.
- View trainee profiles and trainer dashboards.
- Book sessions and view upcoming sessions.
- Use the chat, cart, and notifications pages.
- Edit profiles and trainer classes; view trainer ratings and reviews.

The app is a prototype: some screens and flows may be incomplete or rely on seeded local data.

## Tech stack

- React 17, React Router 5, Redux, and webpack 5
- Express 4 and Node.js
- PostgreSQL through `pg`
- Firebase Storage and Analytics

## Getting started

### Prerequisites

- Node.js and npm
- PostgreSQL running locally on port `5432`
- A Firebase project if you need the app's Firebase-backed media features

### Install and configure

1. Install dependencies from the repository root:

   ```sh
   npm ci
   ```

2. Create the local PostgreSQL database. The example configuration uses `blueocean`:

   ```sh
   createdb blueocean
   ```

3. Copy the example config and edit `config/config.js` with your local PostgreSQL credentials:

   ```sh
   cp config/config-example.js config/config.js
   ```

   The app reads `user`, `database`, and `password` from this file. The database connection is currently fixed to `localhost:5432`. The Firebase client also reads `firebaseKey` from the same config file; add your Firebase project's API key if using Firebase features:

   ```js
   module.exports = {
     user: 'postgres',
     host: 'localhost',
     database: 'blueocean',
     password: 'yourpassword',
     firebaseKey: 'your-firebase-api-key',
   };
   ```

   `config/config.js` is ignored by Git and should not be committed.

### Create demo tables and data (optional)

The scripts in `server/database/` create and seed the tables used by the API. Run the needed scripts from the repository root, for example:

```sh
node server/database/seedUsers.js
node server/database/seedTrainers.js
node server/database/seedClasses.js
node server/database/createSession.js
node server/database/createTrainerReviews.js
node server/database/createTraineeReviews.js
```

**Warning:** These scripts drop and recreate their respective tables, deleting existing data in those tables. They are demo-data scripts, not migrations; back up any data you need before running them.

### Run locally

Start the client bundler and API in separate terminals from the repository root:

```sh
npm run react-dev
```

```sh
npm start
```

The server listens on [http://localhost:3000](http://localhost:3000) and serves the client files from `public/dist`. Keep the webpack process running while developing so it can rebuild the client bundle.

## API overview

The Express API is mounted at `/api`. Its routes cover:

| Resource | Routes |
| --- | --- |
| Trainers | `GET /trainers`, `GET` or `POST /trainer`, `GET` or `PUT /trainer/:id` |
| Users | `GET` or `POST /user`, `PUT /user/:id` |
| Classes | `GET` or `POST /classes`, `GET` or `PUT /classes/:id` |
| Sessions | `POST /session`, `GET /session/:id`, `GET /session/train/:id` |
| Trainer reviews | `GET` or `POST /trainer-profile`, `GET /trainer-reviews` |

## Project layout

```text
public/src/       React app, components, Redux store, and Firebase setup
public/dist/      Static client files served by Express
server/           Express app, API routes, and PostgreSQL queries
server/database/  Local demo table and data scripts
config/           Example configuration; local config is not tracked
```

## Development notes

- `npm run react-dev` runs webpack in watch mode; there is no separate production build script.
- `npm start` runs the API with nodemon.
- `npm test` is a placeholder that exits with an error; no automated test suite is configured.

## Project links

- [Product demo](https://www.youtube.com/watch?v=LjONY97xeag&ab_channel=BingyiHuang)
- [Product slides](https://docs.google.com/presentation/d/1QTqumdDLUiuOTjzmuYIOSXg_7xGrFqjiGDzyqG2-tDw/edit?usp=sharing)

## Contributors

[Nader Damouni](https://github.com/naderDamouni), [Bingyi Huang](https://github.com/B1-sauce), [Raul Martinez](https://github.com/raulm91), [Michael Rosen](https://github.com/tichaeltosen), [Dennis Wang](https://github.com/denniswang10)
