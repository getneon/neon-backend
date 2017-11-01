# Neon Backend

You can find the backend code for this project at [getneon/neon-frontend](https://github.com/getneon/neon-frontend)

## Getting Started

### Installing Packages

1. Run `yarn` to install packages

2. Make sure you have the proper database created

> If you need to access the mysql terminal, do so with `mysql -u root -p`
> This will prompt you for a password
> Run `create database neon-dev`
> Then run `use neon-dev`

### Running the app

1. Run `mysql.server` start to start the local mysql server

2. Run `nodemon server/server.js`
