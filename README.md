# Portfolio

A modern, responsive portfolio website built with Next.js and React to showcase projects, services, and professional information.

## Features

- **Responsive Design** - Mobile-friendly layout that works across all devices
- **Modern UI** - Clean and professional user interface
- **Component-Based** - Modular component architecture for easy maintenance
- **Multiple Sections** - Including Home, About, Services, Work, and Contact
- **Contact Form** - Get in touch section with contact functionality
- **Visit Tracking** - Track page visits with visit logging utility

## Tech Stack

- **Framework**: Next.js
- **Frontend**: React
- **Styling**: CSS Modules & Global CSS
- **Build Tool**: Next.js CLI

## Project Structure

```
Portfolio/
├── app/
│   ├── page.js              # Home page
│   ├── layout.js            # Root layout
│   ├── globals.css          # Global styles
│   └── components/
│       ├── About.jsx        # About section
│       ├── Contact.jsx      # Contact section
│       ├── Footer.jsx       # Footer component
│       ├── Header.jsx       # Header component
│       ├── Navbar.jsx       # Navigation bar
│       ├── Services.jsx     # Services section
│       └── Work.jsx         # Work/Portfolio section
│   └── styles/
│       └── Navbar.module.css # Navbar styles
├── assets/
│   ├── assets.js            # Asset exports
│   └── public/              # Public assets
├── public/                  # Static files
├── utils/
│   └── trackVisit.js        # Visit tracking utility
├── package.json             # Dependencies
├── next.config.mjs          # Next.js configuration
├── jsconfig.json            # JavaScript configuration
├── postcss.config.mjs       # PostCSS configuration
└── eslint.config.mjs        # ESLint configuration
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Production Build

Create a production build:
```bash
npm run build
npm run start
```

## Components

- **Navbar** - Navigation component with responsive design
- **Header** - Main header section
- **About** - About me section
- **Services** - Services offered section
- **Work** - Portfolio/work showcase section
- **Contact** - Contact form and information
- **Footer** - Footer with links and information

## Configuration Files

- `next.config.mjs` - Next.js configuration
- `jsconfig.json` - JavaScript path aliases and settings
- `postcss.config.mjs` - PostCSS plugins for styling
- `eslint.config.mjs` - ESLint rules for code quality

## License

This project is open source and available under the MIT License.
