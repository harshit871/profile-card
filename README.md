# Profile Card Component

This project is a React-based implementation of a Profile Card, built as part of a front-end challenge. It features a responsive, beautifully designed user profile card with social media links.

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Vanilla CSS included via `css/style.css` for base styles)
- **Icons:** Custom inline SVGs as React components

## 🏗️ Project Architecture

The application has been modularized for clean architecture and reusability. Here is an overview of the component structure:

### `/src/components`
- **`ProfileCard.tsx`**: The main container component that acts as the shell for the profile card. It composes the top and bottom sections.
- **`TopProfileSection.tsx`**: Handles the user's avatar, name, title, and a brief bio description.
- **`BottomProfileSection.tsx`**: Contains the interactive elements—a "Contact me" button and a flex row of social media links.
- **`Credits.tsx`**: A small footer component acknowledging the original challenge creator and the developer.

### `/src/assets`
- Contains individual `.tsx` React components for all SVGs (`GithubIcon`, `InstagramIcon`, `LinkedInIcon`, `XIcon`). 
- **Why `.tsx` SVGs?** The SVG files were converted into inline React components rather than being imported as `<img src="..." />`. This allows the SVGs to seamlessly inherit CSS styles from their parent DOM nodes (such as Tailwind's `text-indigo-700` altering the `currentColor` and `w-5 h-5` correctly controlling dimensions and scaling).

### `/src/constants.ts`
- Acts as the central source of truth for the social media link data. It maps names, URLs, accessibility labels (`aria-label`), and the associated SVG component icons, feeding directly into the `BottomProfileSection` array map.

## 💻 Getting Started

To run this project locally on your machine, follow these steps:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🎨 Design Details

- **Tailwind Utility Classes**: The project leverages Tailwind to structure the layout (`flex`, `gap-6`, `justify-center`), typography, and colors.
- **SVG ViewBox Tricks**: Some SVGs use a specific inner ViewBox (e.g., `viewBox="8 8 20 20"`) paired with outer container sizing (`w-9 h-9`) so that the clickable target is large (36x36) but the visual icon renders at an exact 20x20 pixel ratio.
