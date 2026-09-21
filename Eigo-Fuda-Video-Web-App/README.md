# Eigo Fuda Video Web App

A simple HTML5 video player designed for GitHub Pages hosting and GitHub Codespaces development.

## Features

- HTML5 video playback
- Responsive mobile-friendly layout
- Works as a static GitHub Pages site
- Easy to run in GitHub Codespaces or locally
- Supports local MP4 file playback from the `videos` directory

## Project structure

```text
Eigo-Fuda-Video-Web-App/
├── index.html
├── style.css
├── app.js
├── README.md
├── .devcontainer/
│   └── devcontainer.json
└── videos/
    └── Eigo_Fuda_Otakara_John_Tasukete.mp4
```

## Local development

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages

This app is static and compatible with GitHub Pages. You can publish the repository root or the project folder directly from the GitHub Pages settings.

## Notes

Place the video file at:

```text
videos/Eigo_Fuda_Otakara_John_Tasukete.mp4
```

If the file is missing, the app displays a message instead of a broken player.
