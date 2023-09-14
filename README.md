# Labo2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<!-- faire register pour créer des comptes

{
  "pseudo": "string",
  "email": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string"
}

identifier les 3 modeles à recevoir/envoyer API (les créers) Les trois modèle user, userLogin, userRegister

etape 2

register.ts 
mettre en place formbuilder avec le meme nom que le model à envoyer dans la DB

relier avec html formcontrol

submit
    -verifie la validité
    - si valide : ok, sinon afficher erreurs
    - mettre en place les messages d'erreus (validators)

etape next
mettre en place le register dans le service auth (appel api observable  + abonnement)  si ok redirection, sinon message d'erreur

si erreur 400 => message -->