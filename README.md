# Technologies Used
# Backend: ASP.NET Core: A framework for building web APIs and applications, used for the backend of this project.
# C#: The primary programming language used for the backend.
# Entity Framework: Used for data management and handling persistence (e.g., saving tasks to the database).

# Frontend:
# React: A JavaScript library for building user interfaces, used to manage components and state in the frontend.
# TypeScript: A superset of JavaScript that adds static typing, ensuring better development experience and fewer runtime errors.
# Vite: A build tool that provides fast development environments and optimized production builds for modern web projects.
# Tailwind CSS: A utility-first CSS framework that helps in creating custom, responsive designs using pre-built classes.


# Clone the repository
git clone https://github.com/mrsvolodya/TodoApp-Fullstack.git

# Navigate into the project folder
cd TodoApp-Fullstack

# Set up the backend
cd TodoApi
dotnet restore
dotnet run &

# Set up the frontend
cd ../TodoApp-Front-React
npm install
npm run dev