# Zillow Angular Rebuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Installation

`git clone https://github.com/dmonarrez/angular-rebuild`

`npm install` to install all dependencies

## Firebase Credentials

Must create a google account if you do not already have one

Before serving the project, go to https://firebase.google.com/. You will see the option to "Add project". Select it.

Click on the "Add FireBase to your web app" option (icon is </>).

Add the following code to src/app/api-keys.ts and fill in the fields with your corresponding FireBase information:

export const masterFirebaseConfig = {

    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

  /src/app/api-keys.ts is already added .gitignore file for FireBase information security.

## Description

This project is a light rebuild of the Zillow webpage using Angular CLI to get practice building out pages and apps with Angular. This project also utilizes Firebase as a database and as a method of deployment.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Authors

* **David Monarrez** - [Github](https://github.com/dmonarrez)

## Current Progress

The program design and layout had to be restarted from scratch despite the progress completed last week. Zillow updated their page at some point in the previous week so I lost the template I was working off of and had to redo the site with the new style and layout.

The program has completed nav, search, and main page components (style and layout complete)

The program is set up with firebase for database functionality.

The program is deployed with firebase.

## Developer Road Map

The program still needs more aesthetic aspects fleshed out to be nearly identical to the Zillow site.

The program needs to have sign up/ login functionality through firebase so there is data being stored and called from the database.

## Known Bugs

N/A

## License

Copyright (c) 2019 **_David Monarrez_**
<br>
MIT
