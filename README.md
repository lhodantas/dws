# DWS

A web application built with **React.js**, **Vite**, and **TypeScript**, designed to provide dynamic and efficient content delivery.

## Table of Contents

- [Installation](#installation)
- [Technologies](#technologies)
- [Features](#features)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/dws.git
cd dws
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Technologies

- **React 19**: Modern frontend library for building user interfaces.
- **TypeScript**: Static typing for JavaScript.
- **Vite**: Fast build tool optimized for modern JavaScript frameworks.
- **Styled Components**: CSS-in-JS solution for component styling.
- **React Router**: Navigation and routing for React applications.
- **TanStack React Query**: Data fetching and caching.
- **Axios**: HTTP client for API requests.
- **ESLint**: Code linting and formatting.

## Features

- Filtering and searching posts by author and category.
- Responsive design.
- Reusable components.
- API integration with Axios.
- Client-side caching with React Query.

## Scripts

| Script    | Description                      |
| --------- | -------------------------------- |
| `dev`     | Start development server         |
| `build`   | Build project for production     |
| `serve`   | Serve production build           |
| `lint`    | Run ESLint to check code quality |
| `preview` | Preview production build         |

## Folder Structure

```bash
├─ public                 # Static files (images, fonts, etc.)
├─ src                    # Application source code
│  ├─ assets             # Images and static assets
│  ├─ components         # Reusable components
│  ├─ hooks              # Custom React hooks
│  ├─ pages              # Page components
│  ├─ routes             # Route configurations
│  ├─ services           # API service integrations
│  ├─ styles             # Global styles and styled components
│  ├─ templates          # Page templates
│  ├─ themes             # Theme configurations
│  └─ utils              # Utility functions
├─ .env                  # Environment variables
├─ .gitignore            # Files and folders to ignore in Git
├─ eslint.config.js      # ESLint configuration
├─ index.html            # Main HTML file
├─ package.json          # Project dependencies
├─ tsconfig.json         # TypeScript configuration
├─ vite.config.ts        # Vite configuration
└─ README.md             # Project documentation
```
