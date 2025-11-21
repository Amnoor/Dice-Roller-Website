# Dice Roller Website

A tiny, client‑side web app for rolling one or more six‑sided dice. Built with plain HTML, CSS, and JavaScript. Ships with a Dockerfile for easy deployment.

## Table of Contents

- [Features](#features)
- [Quick Start (Local)](#quick-start-local)
- [Using the App](#using-the-app)
- [Docker](#docker)
- [Project Structure](#project-structure)
- [Development Notes](#development-notes)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Features
- Roll any number of dice (1+)
- Shows results as numbers and images (1–6)
- Zero dependencies; static assets only

## Quick Start (Local)
- Option 1: Open `index.html` directly in your browser
- Option 2: Run with Docker
  - `docker run -itd -p 8080:80 amnoorbrar/dice-roller`
  - Visit http://localhost:8080

## Using the App
1. Enter how many dice to roll
2. Click "Roll Dice"
3. View textual results and corresponding images

## Docker
Build and run using the included Nginx-based image:

```bash
# Build
docker build -t dice-roller:latest .

# Run
docker run --rm -p 8080:80 dice-roller:latest
# Open in your browser
# http://localhost:8080
```

The image serves static files from `/usr/share/nginx/html`.

## Project Structure
```
.
├─ index.html          # UI markup
├─ dice_roller.js      # Dice roll logic
├─ Dockerfile          # Nginx static site image
├─ .dockerignore       # Build context excludes
├─ LICENSE             # MIT license
├─ README.md           # This file
├─ style/
│  └─ style.css        # Styles
└─ dice_images/        # Face images 1–6
```

## Development Notes
- Images are loaded from `dice_images/{1..6}.png`
- No build step required
- Works offline; all logic runs in the browser

## Contributing
Contributions are welcome. Please follow these steps:

1. Fork the repository.
2. Create a feature branch off `develop` (e.g., `feature/your-topic`).
3. Commit your changes with clear messages.
4. Open a pull request to the `develop` branch in the original repository.

## Acknowledgements
A big thanks to all contributors who have helped improve this project.

```Acknowledgements:

```

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.