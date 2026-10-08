# My Daily Tasks

A small task tracker built as a first web development and cloud deployment project. Add tasks, mark them complete, and clear completed tasks. The app saves tasks in the browser on the device where you use it.

## Features

- Add tasks
- Mark tasks complete or active
- Delete individual tasks
- Clear all completed tasks
- Save tasks in browser local storage
- Responsive layout for desktop and mobile

## Built with

- HTML
- CSS
- JavaScript
- GitHub for source control
- Azure Static Web Apps for hosting
- GitHub Actions for automatic deployment

## Run locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` with the Live Server extension, or open `index.html` directly in a browser.

## How task storage works

Tasks are stored in the browser's local storage. They remain after refreshing the page, but they are not synced to other browsers or devices.

## Deployment

The site is hosted with Azure Static Web Apps. Pushing a change to the connected GitHub branch starts a GitHub Actions workflow that deploys the update.

## Project files

- `index.html` — page structure
- `styles.css` — visual styles
- `app.js` — task behavior and browser storage
