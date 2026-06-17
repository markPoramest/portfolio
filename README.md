# Personal Portfolio - Built with Astro & Tailwind CSS

This is a personal portfolio website built with [Astro](https://astro.build/) and styled with [Tailwind CSS](https://tailwindcss.com/). It features a minimalist, responsive design with a dual-theme (light/dark) system inspired by Japanese aesthetics.

![Homepage Screenshot](public/screenshot.png) <!-- You can add a screenshot of your site here -->

## ✨ Features

-   **Dual Theme**: Light (Wabi-Sabi) and Dark (Midnight Tokyo) modes with a theme toggler.
-   **Responsive Design**: Fully responsive layout for all devices.
-   **Astro View Transitions**: Smooth, seamless page transitions.
-   **Animated Work Timeline**: An unfolding, animated timeline to showcase work experience.
-   **Dynamic Routing**: Work detail pages are dynamically generated from Markdown files.
-   **Clean & Modular Code**: Built with reusable Astro components.

## 🚀 Project Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>
    ```

2.  **Install dependencies (using pnpm):**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    The site will be available at `http://localhost:4321`.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`    | Installs dependencies                        |
| `pnpm dev`        | Starts local dev server at `localhost:4321`  |
| `pnpm build`      | Build your production site to `./dist/`      |
| `pnpm preview`    | Preview your build locally, before deploying |

## Customize

-   **Content**: Edit the Markdown files in `src/content/work/` to update your work experience. Update `src/pages/me.astro` for the main bio and other sections.
-   **Styling**: Modify the color palette and other design tokens in `tailwind.config.mjs`.
-   **Images**: Replace `public/profile.jpg` with your own profile picture.

---
Built with ❤️ and code.
