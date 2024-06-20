# Bloglist App

A simple blog app created for the [Fullstack-HY 2023](https://github.com/3nd3r1/fullstack-hy) course.

[Live preview](https://bloglist-frontend.host.ender.fi/blogs)

## Running

To run the project locally with docker-compose, run the following commands:

```bash
git clone https://github.com/3nd3r1/bloglist.git
cd bloglist
docker compose up -d
```

The frontend will then be available at [http://localhost:8080](http://localhost:8080).

## Stack

### Frontend

-   [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
-   [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90
-   [Framer Motion](https://www.framer.com/motion/) - An animation library for React

### Backend

-   [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
-   [Mongoose]() - Elegant mongodb object modeling for node.js

## Project structure

```
$PROJECT_ROOT
.
├── bloglist-backend/
│   ├   # Controllers
│   ├── controllers
│   ├   # Models
│   ├── models
│   ├   # Backend tests
│   └── tests
└── bloglist-fronted/
    ├   # Static files
    ├── public
    └── src/
        ├   # React components
        ├── components
        ├   # Page files
        ├── pages
        ├   # Redux reducers
        ├── reducers
        ├   # Service files
        └── services
```
