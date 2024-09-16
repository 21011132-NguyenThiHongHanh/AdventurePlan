Dưới đây là file `README.md` hoàn chỉnh với định dạng Markdown chi tiết:

# AdventurePlan - React + Vite Project

Welcome to the AdventurePlan project, built using React and Vite. This project is developed and maintained by [AnhCBT](https://www.facebook.com/chu.anh.11/). It provides a fast and scalable front-end experience for your web application.

## Features

- **React with Vite**: Leveraging the fast development environment of Vite with the power of React.
- **Bun Package Manager**: Uses Bun for super-fast installs and builds.
- **Modular Architecture**: The project structure is designed to be modular and easy to maintain.
- **Custom Routing**: Includes custom navigation features with React Router.
- **Responsive UI**: The UI is designed to work seamlessly across various devices.

## Prerequisites

Before you begin, ensure you have the following tools installed on your system:

- **Node.js**: Download and install [Node.js](https://nodejs.org/en/download/) (v14 or later).
- **Bun**: The package manager used for this project. Install Bun globally:

  ```bash
  npm install -g bun
  ```

## How to run?

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/tuananhwork/AdventurePlan.git
   ```

2. Navigate into the project directory:

   ```bash
   cd AdventurePlan
   ```

3. Install dependencies using Bun:

   ```bash
   bun install
   ```

4. Start the development server:

   ```bash
   bun run dev
   ```

   This will launch the app locally, and you can access it in your browser at `http://localhost:3000`.

## Project Structure

- **`/src`**: Contains all source code, including components, pages, and utilities.
  - **`/components`**: Reusable UI components like buttons, forms, etc.
  - **`/pages`**: Individual pages such as Sign Up, Login, etc.
  - **`/utils`**: Utility functions, including custom hooks for navigation.
  - **`/hooks`**: Customize hooks.
- **`/public`**: Public assets like images and icons.
- **`/dist`**: The production build output, created after running the build command.

## Scripts

Here are some of the important scripts you can use with Bun:

- `bun run dev`: Starts the development server.
- `bun run build`: Builds the project for production.
- `bun run lint`: Lints the project to ensure code quality.

## Deployment

Once you are ready to deploy your project, build the production version using:

```bash
bun run build
```

The production files will be located in the `dist` directory. You can deploy them to any static site hosting provider, such as [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request with your changes. All contributions are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [AnhCBT](https://www.facebook.com/chu.anh.11/).
