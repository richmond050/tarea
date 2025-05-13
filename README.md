# Tarea - A Simple Task Management Web App

**Live Demo:** https://tarea-app.netlify.app/

**Tarea** is a **simple task management web app** built with React and Create React App. It aims to help users organize their daily tasks efficiently with a clean, responsive interface. This project serves as **my first major React project** and a way to practice modern frontend development using React and component-based architecture.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Available Scripts](#available-scripts)
* [Running Tests](#running-tests)
* [Deployment](#deployment)
* [Project Structure (Optional)](#project-structure)
* [Contributing (Optional)](#contributing)
* [License (Optional)](#license)

## Features

* **Task Creation & Deletion:** Easily add and remove tasks with just a few clicks.
* **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
* **Local Storage Persistence:** Tasks are saved in the browser's local storage, so your list stays intact even after refreshing.
* *(More features can be added as the project grows)*

## Technologies Used

* **Frontend:**
  * React (v19.1.0)
  * React DOM
  * React Scripts (Create React App)
  * HTML5
  * CSS3
* **Testing:**
  * Jest (`@testing-library/jest-dom`)
  * React Testing Library (`@testing-library/react`, `@testing-library/user-event`)
* **Development Tools:**
  * ESLint (configured with `react-app` and `react-app/jest`)
  * Git & GitHub
* **Deployment:**
  * Netlify

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* **Node.js**: Download and install from [nodejs.org](https://nodejs.org/). LTS version is recommended.
* **Git**: Download and install from [git-scm.com](https://git-scm.com/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/richmond050/tarea.git
    cd YOUR_REPOSITORY_NAME
    ```
    *(Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` accordingly)*

2. Install dependencies:
    ```bash
    npm install
    ```
    *(or use `yarn install` if you prefer Yarn)*

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) in your browser.  
Hot reloading is enabled.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note:** This is a one-way operation. Once you `eject`, you can’t go back!

## Running Tests

This project uses **Jest** and **React Testing Library**.

To run tests:
```bash
npm test
