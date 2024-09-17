Features
React with Vite: Leveraging the fast development environment of Vite with the power of React.
Bun Package Manager: Uses Bun for super-fast installs and builds.
Modular Architecture: The project structure is designed to be modular and easy to maintain.
Custom Routing: Includes custom navigation features with React Router.
Responsive UI: The UI is designed to work seamlessly across various devices.
Prerequisites
Before you begin, ensure you have the following tools installed on your system:

Node.js: Download and install Node.js (v14 or later).

Bun: The package manager used for this project. Install Bun globally:

npm install -g bun
How to run?
Follow these steps to run the project locally:

Clone the repository:

git clone https://github.com/tuananhwork/AdventurePlan.git
Navigate into the project directory:

cd AdventurePlan
Install dependencies using Bun:

bun install
Start the development server:

bun run dev
This will launch the app locally, and you can access it in your browser at http://localhost:3000.

Project Structure
/src: Contains all source code, including components, pages, and utilities.
/components: Reusable UI components like buttons, forms, etc.
/pages: Individual pages such as Sign Up, Login, etc.
/utils: Utility functions, including custom hooks for navigation.
/hooks: Customize hooks.
/public: Public assets like images and icons.
/dist: The production build output, created after running the build command.
Scripts
Here are some of the important scripts you can use with Bun:

bun run dev: Starts the development server.
bun run build: Builds the project for production.
bun run lint: Lints the project to ensure code quality.
Deployment
Once you are ready to deploy your project, build the production version using:

bun run build
The production files will be located in the dist directory. You can deploy them to any static site hosting provider, such as Netlify or Vercel.
