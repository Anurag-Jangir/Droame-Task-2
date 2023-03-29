# droame 
# Description
This Node.js application uses the Express framework to create a web server that serves HTML pages using the EJS template engine. It also includes functionality to interact with a database using Sequelize ORM. The application handles HTTP requests and responses for various operations such as adding customers, booking appointments, adding locations and shot types.

# Dependencies
The following dependencies are required for this application:

express - The Node.js web framework used to create the server
body-parser - Middleware used to parse the body of the HTTP request
sequelize - An ORM used to interact with the database
ejs - A template engine used to render HTML views
Installation
Clone the repository from GitHub.
Navigate to the root directory of the project in the command line.
Run npm install to install the required dependencies.
Usage
Run the server by running npm start in the command line.
Visit http://localhost:8000/home to view the home page.
Use the navigation links to perform various operations such as adding a customer or booking an appointment.
The server will listen on port 8000 by default.
Code Explanation
Initialization
The required dependencies are imported at the top of the file. The Express framework is then used to create an instance of the server and stored in the app constant.

Middleware
The body-parser middleware is used to parse the body of the HTTP request. The express.static middleware is used to serve static files, specifically Bootstrap CSS files.

## Routes
The routes for handling different operations are defined using app.get and app.post methods. These routes handle GET and POST requests respectively. The Controller object is used to define the controller functions for each route.

## Database
The sequelize ORM is used to define and interact with the database. The models for the database tables are imported at the top of the file. The belongsTo and hasMany methods are used to define the relationships between the models.

## Server Startup
The sequelize.sync() method is used to synchronize the models with the database. The server is started using the app.listen() method. The port number is set to 8000 by default. The console.log() method is used to log a message to the console once the server has started.

## Conclusion
This Node.js application uses the Express framework to create a server that handles HTTP requests and responses for various operations such as adding customers, booking appointments, adding locations and shot types. It also interacts with a database using the Sequelize ORM. The application is modular and can be easily extended to add more functionality.
