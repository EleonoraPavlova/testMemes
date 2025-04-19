# Memes

# React + TypeScript SPA + Vite 🚀

## Deployment:

[Railway](https://memes-pavlova.up.railway.app) - web application


> ## How to start:

1. Install dependencies:
   ```bash
   npm i

2. Run the development server:
    ```bash
    npm run dev

> ## Description:

This is a React Single Page App that serves as a meme directory, featuring a collection of popular memes.
The app includes two views:

### 1. **Table View:**

- Displays memes in a structured **table format**.
- Columns include:
    - Meme ID
    - Name
    - Image URL
    - Like count
- **Edit button** in each table entry:
    - Opens a dropdown for editing meme properties (name, image URL, and likes).
- **Validation** for meme properties (except the meme ID):
    - **Name:** Must be a string between 3 and 100 characters.
    - **Image URL:** Must be a valid URL in JPG format.
    - **Like Count:** Must be an integer between 0 and 99.
- Meme data is stored in **local storage**, allowing users to modify meme properties.

### 2. **List View:**

- Displays memes in a **responsive card layout**.
- Each card contains:
    - **Meme image** (using HeroUI's `Image` component)
    - **Meme title** (displayed as the card's header)
    - **Number of likes**
    - **Clickable link** for additional interaction.

### 3. **Responsive Design:**

- The app is fully responsive, ensuring an optimal experience on both **desktop and mobile devices**.

> ## Project Stack

| **Core**         | **Styling**   | **State/Logic** | **Tooling**         |
|------------------|---------------|-----------------|---------------------|
| React            | Tailwind CSS  | Redux Toolkit   | Vite                |
| React DOM        | HeroUI        | React Redux     | TypeScript          |
| React Router DOM | Framer Motion | LocalStorage    | ESLint              |
|                  |               |                 | Prettier            |
|                  |               |                 | Husky + Lint-Staged |