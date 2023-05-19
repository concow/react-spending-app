# ExpenseTracker

The frontend of a Full Stack MERN Spending Application with JWT Auth. A SPA (Single Page Application) configured with [Vite](https://vitejs.dev/).

## User Stories

ExpenseTracker is an application where a user can signup and keep track of their own personal or businesses expenses.
In a users personal dashboard they have the ability to filter their expenses by year, in which the expense chart display will change
accordingly.

## Stack & Tech Used

- Frontend with React, Redux Toolkit to register, login, logout, delete, create
- Backend API ExpressJS, NodeJS, MongoDB
- REST API routes for auth, login, register, create expense, delete expense
- Protected Routes and endpoints
- JWT Authentication, bcrypt hashed password
- Custom auth middleware to verify a Users JSON Web Token
- Custom error middleware
- React Toastiy for user notifications

## Run

`npm run dev`
