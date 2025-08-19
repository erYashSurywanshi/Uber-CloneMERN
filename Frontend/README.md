# UberClone Frontend

This is the frontend of the UberClone application built using React, Vite, and TailwindCSS.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd UberClone/Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Available Scripts

- `npm run dev`: Starts the development server with hot module replacement.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the codebase using ESLint.

## Project Structure

```
Frontend/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── ConfirmRIde.jsx
│   │   ├── LoactionSerachPanel.jsx
│   │   ├── LookingForDriver.jsx
│   │   ├── VehiclePanle.jsx
│   │   └── WaittingforDriver.jsx
│   ├── Context/           # Context for managing global state
│   │   ├── CaptainContext.jsx
│   │   └── UserContext.jsx
│   ├── pages/             # React components for pages
│   │   ├── CaptainHome.jsx
│   │   ├── CaptainLogin.jsx
│   │   ├── CaptainSignup.jsx
│   │   ├── Home.jsx
│   │   ├── Start.jsx
│   │   ├── UserLogin.jsx
│   │   ├── UserLogout.jsx
│   │   ├── UserProtectwrapper.jsx
│   │   └── UserSignup.jsx
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point for the application
│   ├── index.css          # Global styles
│   └── App.css            # Component-specific styles
├── vite.config.js         # Vite configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Features

- **React Router**: For navigation between pages.
- **TailwindCSS**: For styling the application.
- **Context API**: For managing global user and captain states.
- **GSAP Animations**: Smooth animations for UI transitions.
- **Dynamic Panels**: Includes panels for vehicle selection, ride confirmation, driver search, and waiting for the driver.

## Notes

- Ensure the backend server is running to test API integrations.
- Update the API base URL in the application if necessary.

## Recent Updates

- Added `WaittingforDriver` component for displaying the waiting status for a driver.
- Integrated `WaittingforDriver` into `Home.jsx` to complete the ride flow.
- Enhanced animations using GSAP for smoother transitions between panels.
- Updated `Home.jsx` to include dynamic panels for better user experience, including:
  - **Vehicle Selection Panel**: Allows users to select a vehicle.
  - **Ride Confirmation Panel**: Confirms the ride details.
  - **Looking for Driver Panel**: Displays the status of finding a driver.
  - **Waiting for Driver Panel**: Displays the assigned driver's details and status.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
