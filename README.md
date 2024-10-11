# Cheat Sheet

1. Initialize project 
   [X] Initialize node package `npm init -y`
   [x] Install nodemon `npm i -D nodemon`
    Add start scripts
   [X] Add initial folder structure
   [X] Change module type
   [ ] Add debugging
   [X] Add env variable file
   [X] Install and configure dotenv `npm i dotenv`
2. Setup Express
   [X] Install `npm i express`
   [X] Add static resources
   [X] Configure static middleware
   [X] Add body parser
   [X] Add modular routers
3. Setup handlebars
   [X] Install handlebars `npm i express-handlebars`
   [X] Add view engine
   [X] Set view directory
   [X] Set view engine
   [X] Add home view
   [X] Add layout
   [X] Add partials dir
   [X] Add dynamic title
4. Add database
   [X] Install mongoose `npm i mongoose`
   [X] Connect to local db
   [X] Add user model
5. Register
   [X] Fix navigation links
   [X] Add template
   [X] Add auth controller
   [X] Render page on get
   [X] Post action
   [X] Add auth service register
   [X] Install bcrypt `npm i bcrypt`
   [X] Hash password
   [X] Check for password mismatch
   [ ] Check if user exists
6. Login
   [X] Install jsonwebtoken `npm i jsonwebtoken`
   [ ] Convert jsonwebtoken to promise based lib (optionally)
   [ ] Add typescript declaration documentation (optionally)
   [X] Install cookie-parser `npm i cookie-parser`
   [X] Add cookie parser middleware
   [X] Add login page
   [X] Add login post action
   [X] Add authService login method
   [X] Generate jwt
   [X] Return jwt with http only cookie
   [ ] Auto login after register
7. Logout
   [ ] 
8. Authorization
   [ ] Add auth middleware
   [ ] Add isAuth middleware
9. Error Handling
   [ ] Add error notification
   [ ] Add error message util
   [ ] Handle register errors
   [ ] Handle login errors
10. Dynamic Navigation