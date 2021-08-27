# My Project Management Tool (Front-End)

A full-stack web application which functions as a simple project management tool giving the ability to users to register an account, create their own secured projects and fill them with tasks which can be managed based on priority and be moved through various stages.

This project was created following the design implemented in the Udemy course "Full Stack Project: Spring Boot 2.0, ReactJS, Redux" while at the same time changing and improving the original design
(i.e. upgraded react client from class-based to functional components, made back-end code more concise making use of functional programming as well as additional libraries such as Lombok, etc.)

## Technologies used

The project was created making use of the following technologies:

**Back-End Application**

* Spring Boot 2
* Spring Security (JWT-based authentication)
* Spring Data JPA (MySQL Database)


**Front-End Client**

* React.js
* React Router for local routing
* Bootstrap 5 for layout and styling
* Axios for API calls
* Redux for state management
* Jwt-Decode library for handling security and authentication


## Deployment

The application was deployed using Heroku and its ClearDB database:
https://my-pmt-project-management-tool.herokuapp.com/

Feel free to use it: register, log in, create your projects and fill their board with tasks!

## Pending features/improvements

* Add comprehensive logging to the back-end.
* Develop unit tests for the back-end.
* Restyle entire application to move away from the initial design.
* Implement the Drag and Drop API to make interacting with the project board better.