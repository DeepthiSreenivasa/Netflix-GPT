
# NGPT

NGPT is a Netflix-inspired movie discovery app built with React, Redux, Firebase Authentication, Tailwind CSS, and TMDB. It combines a familiar streaming-style browsing experience with a GPT-style search page for exploring movies from user input.

## Deployment Details

- Deployed URL - https://netflix-gpt-b4fc7.web.app/Login

- Step - 1 : npm run build
- Step - 2 : npx firebase deploy --only hosting  (firebase cli not installed globally so I use npx for deployment)

## Highlights

- Netflix-style browse experience with hero content and movie carousels
- Firebase-based sign up, sign in, and sign out flows
- Protected app flow for authenticated users
- TMDB-powered movie browsing and search results
- Multi-language support for the GPT search page
- Redux store slices for app config, user state, movie state, and GPT search results
- Responsive UI styled with Tailwind CSS

## Tech Stack

- React
- Redux Toolkit
- React Router
- Firebase Authentication
- Tailwind CSS
- TMDB API
- OpenAI SDK integration scaffold

## Project Structure

```text
src/
	components/     UI screens and reusable movie display components
	hooks/          Data-fetching hooks for movies and search flows
	store/          Redux slices and store setup
	utils/          Firebase, validators, language config, and helpers
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create your environment file

Create a `.env` file in the project root with:

```env
REACT_APP_TMDB_TOKEN=your_tmdb_bearer_token
REACT_APP_OPENAI_KEY=your_openai_api_key
```

### 3. Start the app

```bash
npm start
```

### 4. Build for production

```bash
npm run build
```

## Features Implemented

- Authentication with Firebase
- Form validation for login and signup
- Route flow between auth and browse pages
- Movie collections such as popular, top-rated, upcoming, and now-playing
- Trailer-led main container and supporting carousel sections
- GPT search page with user input and TMDB-backed result rendering
- Poster and backdrop fallback handling for movie cards

## Note About GPT Search

The search experience currently does not use a GPT API for live search generation because of API billing cost.

Right now, the app uses TMDB search results directly for the search page. If billing is enabled for a GPT provider and a valid API key is configured, GPT-powered search can be enabled with minor code changes.

If you specifically want to use a Google/OpenAI-style GPT search layer, the integration path is already partially prepared in the codebase and only needs small adjustments around the search request flow.

## Environment Notes

- `.env` is already ignored in `.gitignore`
- In Create React App, client-exposed variables must start with `REACT_APP_`
- After changing `.env`, restart the dev server

## Future Improvements

- Connect GPT output directly to multi-movie recommendation flows
- Add loading and error states for search results
- Improve carousel controls with arrows and drag behavior
- Move sensitive Firebase config and related setup into a cleaner config layer
- Add test coverage for auth, hooks, and GPT search flow

## Author Note

This project is built as a practical learning and portfolio-style app that combines authentication, API integration, state management, and a streaming-inspired UI in one codebase.

## Major concepts learnt and implemented

- Create React App
- Configure Tailwind
- Header
- Routing for the App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying our App to Prod
- Creating Sign Up User Account
- Implement Sign In User Api
- Creating Redux store with userSlice
- useAuthStateChange
- Implement Sign out
- *Update Profile*
- *BugFix: Sign up user displayName and profile Picture*
- BugFix: If the user is not logged in Redirect /browse to Login Page and vice-versa 
- *Hygiene: Practice:Unsubscribe on onAuthStateChange*
- *Hygiene: use constants for URLS*
- Added TMDB APIs
- Created Main Container for Trailer
- Created Seconadry container for carousels
- Store creates to hold all the movie data
- Created a GPT search Page  
- Navigate to that page with a button
- Add Multi lingual feature to the GPT PAge
- Search based on user Input