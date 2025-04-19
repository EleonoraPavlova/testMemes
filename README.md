# Memes

# React + TypeScript SPA + Vite 🚀

### Link:

> [Memes](https://memes-pavlova.up.railway.app/) - web application

### Description:

I've created a React Single Page Application that serves as a meme directory, featuring a collection of popular memes.
The app includes two views:

Table View:

Displays memes in a structured table format with columns for meme ID, name, image URL, and like count.

Each entry in the table has an Edit button that opens a modal popup, allowing users to edit meme properties (like name,
image URL, and like count).

Validation is applied to all fields except the meme ID:
Name: Must be a string between 3 and 100 characters.
Image URL: Must be a valid URL in the format of a JPG image.
Like Count: Must be an integer between 0 and 99.

The meme data is stored and can be modified directly in the browser using local storage, making it easy for users to
customize meme properties.

List View:

Presents memes in a responsive card layout, where each card includes:

Meme image (using HeroUI's Image component)

Meme title (displayed as the card's header)

Number of likes

A clickable link for additional interaction

This app is fully responsive, ensuring an optimal experience on both desktop and mobile devices.

# Project Stack

| **Core**         | **Styling**   | **State/Logic** | **Tooling**         |
|------------------|---------------|-----------------|---------------------|
| React            | Tailwind CSS  | Redux Toolkit   | Vite                |
| React DOM        | HeroUI        | React Redux     | TypeScript          |
| React Router DOM | Framer Motion | LocalStorage    | ESLint              |
|                  |               |                 | Prettier            |
|                  |               |                 | Husky + Lint-Staged |