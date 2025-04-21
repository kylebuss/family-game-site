# family-game-site

## Install before running in VSCode
1. [git](https://git-scm.com/) (version 2.49.0)
2. [Node.js](https://nodejs.org/en/download) (latest LTS version 22.14.0)
3. [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)  (version 8.0.42)

## Helpful Resources
1. [Angular](https://angular.dev/) ([Link to tutorials](https://angular.dev/tutorials)) this is helpful for learning how to code an Angular application.
2. [Angular Material](https://material.angular.io/components/categories) this is helpful for pre-build components.
3. [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) this is helpful to learn how to use the `display: flex;` css property to align your UI design. For other guides you can look [here](https://css-tricks.com/guides/).

## Setup local database
1. Open MySQL Workbench and create a new MySQL Connection - name it whatever you want.
2. Open the Connection and Create A New Schema.
3. Create two new tables
   1. games
   2. players

## Setup project locally
1. Clone this repository. [Github Desktop](https://desktop.github.com/download/) is a useful application to manage a git repository as it provides a graphical interface.
2. Open VSCode -> File -> Open Folder and navigate to where you cloned the `bentivegna-family-games` repo and select the folder.
3. Open a new Terminal and run the following commands to install the node_modules used by the project.
   1. `cd games`
   2. `npm i`

## Running the project in VS Code (using Command Prompt Terminal)
1. In the Terminal, navigate to the Server folder `cd games\src\app\server` and run the command `node server.js` to start the database server connection and you should see the following: 
    `Server listening on port 3000
    Connected to database`
2. Open another Terminal move to the games folder `cd games` and run `npm start` to start the Angular application.