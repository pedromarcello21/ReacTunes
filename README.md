# ReactTunes

ReactTunes is a React application that allows users to create, read, and update playlists in their Spotify library. It utilizes the Spotify API to fetch and manage playlists, and provides features for playlist playback, exploration, and artwork updates.

## Features

- **Create Playlists**: Create playlists based on recommended genres.
- **Read Playlists**: View your existing playlists.
- **Update Playlists**: Update a selected playlist with a local image.
- **Playback**: Click on a playlist to render it in the playback component.

## Prerequisites

- A Spotify Premium account is required.
- A Spotify Developer account to create an app and get your CLIENTID.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Dependencies

Make sure you have Node.js and npm installed. Then, install the required dependencies by running:

```sh
npm install
```

### Configuration

1. Create a Spotify Developer account and log in to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).

2. Create a new app in the Spotify Developer Dashboard. You can name the app whatever you'd like, but the redirect URI must be:

   ```
   http://localhost:3000
   ```

3. Copy your client ID from the Spotify Developer Dashboard.

4. Create a `config.js` file in the `src` folder of your project and add the following content, replacing `"your-client-id"` with your actual client ID:

   ```javascript
   // src/config.js
   const CLIENT_ID = "your-client-id";
   
   export default CLIENT_ID;
   ```

### Running the Application

To start the development server, run:

```sh
npm start
```

This will start the app and open it in your default web browser at `http://localhost:3000`.

### Build for Production

To create a production build of the app, run:

```sh
npm run build
```

### Running Tests

To run tests, use:

```sh
npm test
```

### Ejecting

If you need to customize the build configuration, you can eject the app by running:

```sh
npm run eject
```

## Available Scripts

In the project directory, you can run:

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm run eject`: Ejects the app to customize the build configuration.

## Dependencies

Here is the list of dependencies required for the project:

- `@testing-library/jest-dom`: ^5.17.0
- `@testing-library/react`: ^13.4.0
- `@testing-library/user-event`: ^13.5.0
- `ajv`: ^8.16.0
- `ajv-keywords`: ^5.1.0
- `axios`: ^1.7.2
- `bootstrap`: ^5.3.3
- `merge-images`: ^2.0.0
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.24.1
- `react-scripts`: 5.0.1
- `react-spotify-web-playback`: ^0.14.4
- `web-vitals`: ^2.1.4

## Enjoy ReactTunes!

Explore and manage your Spotify playlists with ease using ReactTunes. Enjoy creating new playlists, updating existing ones, and seamless playback of your favorite tracks!
