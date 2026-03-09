# Karo Pitch - Homepage

India's premier startup discovery platform connecting Bharat founders directly with top-tier investors. This project contains the source code for the landing page built with React and Vite.

## Features

*   **Responsive Design:** Fully responsive layout optimized for mobile, tablet, and desktop viewing.
*   **Modern Aesthetic:** A premium dark theme with purple, indigo, and orange accents, featuring glassmorphism cards and smooth gradients.
*   **Component Architecture:** Clean, modular React components for each section of the landing page:
    *   Hero section with CTAs
    *   About Karo Pitch
    *   4-Step "How It Works" guide
    *   Startup Categories ("Who Can Apply")
    *   Investor Network
    *   Featured Startups (Product Hunt style)
    *   About KaroStartup context
*   **Performance:** Built with Vite for incredibly fast hot module replacement and optimized production builds.

## Tech Stack

*   [React 18](https://react.dev/)
*   [Vite](https://vitejs.dev/)
*   [Lucide React](https://lucide.dev/) (Icons)
*   Vanilla CSS (CSS Variables + Flexbox/Grid)

## Setup Instructions

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/mrsandy1965/KaroStartup_Assignment.git
    cd KaroStartup_Assignment
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **View the app**
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This will generate a `dist` directory with the compiled and minified assets ready for deployment.

## Design System

The application uses standard CSS variables defined in `src/index.css`.

*   **Primary:** `#6C47FF` (Purple/Indigo)
*   **Accent:** `#FF6B35` (Orange)
*   **Background:** `#0A0A1A` (Dark)
*   **Typography:** Google Fonts (Poppins for Headings, Inter for Body)

## Structure

```
src/
├── components/          # React components and associated CSS
│   ├── About.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── ...
├── App.jsx              # Main application root containing section layout
├── index.css            # Global variables, layout utilities, and typography
└── main.jsx             # React entry point
public/
└── hero-illustration.png # AI generated hero asset
```
