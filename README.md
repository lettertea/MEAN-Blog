# MEAN-Blog
Based off of David Acosta's [code](https://github.com/gugui3z24/MEAN-Stack-With-Angular-2-Tutorial/tree/master).
Live demo [here](https://mean-blogs.herokuapp.com).

Using the MEAN stack, this application attempts to recreate a social media platform. Once registered and logged in, the user may view their own profile with their blogs, other user profiles, or the public blog feed with all blogs. Each blog includes likes, dislikes, and comments functionalities.
# Prerequisites
- Node.js - Download and install [here](https://nodejs.org/en/download).
- MongoDB - Download and install [here](https://www.mongodb.com/download-center).
# Installation
- Clone the Repository
```
$ git clone https://github.com/nashkenazy/MEAN-Blog.git
```
- Navigate to the root directory in the command line and run the following command to install the package.json dependencies:
```
$ npm install
```
- Then install Angular 2 package.json dependencies.
```
$ cd client
$ npm install
```
# Running the Application
There are a couple of methods to start the application.
## First option: start-site.bat
You may attempt to execute the start-site.bat, which will open three command prompts and run their commands. Configure the first line of the .bat file to your path of 'mongod.exe' (as it is set to my configurations). This method may not always work.
## Second Option: Manually Run the Servers
1. Run mongod.exe (either through the command line or the .exe file).
2. Open the command line in the root directory and run the Node.js server.
```
$ npm start
```
3. Open another command line in the root directory and run the Angular server.
```
$ cd client/
$ ng serve
```
## License
No license.
