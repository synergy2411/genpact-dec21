# Breaks
- 11:30AM - 11:45AM
- 01:30PM - 02:15PM 
- 04:00PM - 04:15PM

# What is JavaScript?
- Dynamic language
- Scripting language
- Complex front-end design
- client side validation
- interpreted
- light-weight
- business logic
- functional based 
- embedded with HTML
- ECMA Script specification
- Can be used as front-end, backend and DB layer
- Single Threaded
- Non-blocking / Asynchronous

Full Stack - MEAN, MERN, MEVN 
MEAN - Mongo Express Angular Node
MERN - Mongo Express React Node
MEVN - Mongo Express Vue Node

- Browser Environment (Client-Side)
- Node Runtime Environment (Server-side)
- MongoDB (NoSQL DB) - store in JSON (JavaScript Object Notation) form


# ECMA Community
- ES5 / Vanilla JavaScript
- ES2015 / ES6+ feature
> Arrow Functions
> Destructuring
> Rest / Spread Operators
> Template Literals
> Block scope variable
> Classes and Modules
> Map / Set
> Optional Parameter
> Default Parameter etc


# TypeScript
> npm install typescript -g
> tsc <filename> -> generate JavaScript Code

# Why TypeScript?
- Extension of JavaScript by Microsoft
- ES2015+ features
- Object-oriented System
- Type Definition
- Angular itself programmed in typescript

# JavaScript DataTypes : 
- number
- string
- boolean
- date
- object
- array
- function

# Typescript Types :
- any
- unknown
- null
- undefined
- enum
- custom types :
    - class 
    - interface 
    - type keyword


# Angular Building blocks
1. Components : reusable piece of code for creating the UI/View
    - ES6 Class with @Component({})
2. Directives : to apply UI Logic
    - ES6 Class with @Directive({})
3. Pipes : to tranform/format the data/model
    - ES6 class with @Pipe()
4. Services : App Business Logic
    - ES6 class with @Injectable()
5. Modules : Container for interrelated piece of code
    - ES6 class with @NgModule()

# Handling Async Tasks in JavaScript -
- Callback functions
- Promises
- Async...await
- Observable

# Angular Project - Angular CLI Tool
> npm uninstall @angular/cli -g
> npm install -g @angular/cli@11
> ng --version
> ng new <project-name> / users-app
> cd users-app
> npm run start 

> ng generate component path/to/component/ComponentName
> ng g c components/users/user-image 
> ng g p pipes/country-code

# JavaScript Libraries and Framework
- *Angular : Supports all client-side feature, Sponsured by Google, CLI tooling, XHR Calls Angular Compiler (Ahead-Of-Time Compilation), Complex architecture, heavy build, enterprise level apps etc
- *Ember : Supports all features on client side
- Angular_v1.x : Library; AngularJS
- React : Virtual DOM, Light-weight, sponsured by Facebook, Great community support
- jQuery : DOM Manipulation, AJAX, Animation
- Backbone : MVC Model at client side
- Polymer : Create Custom Elements
- D3JS : Creates graphs
- Knockout : Efficient 2 way data binding, MVVM
- Vue : Template oriented, Evan You, emerging in JS market
- NodeJS : Server-Side Platform
- Express : Server side framework


# Component Types
- Smart/ Parent/ Container : contains other components, business logic. eg. UsersComponent, AppComponent
- Dump/ Child/ Presentational : don't have any business logic, receive the data from parent, they create the UI. eg. UserImageComponent, UserInfoComponent




# Reference / Primitive types
- Reference - Objects, Array, Functions, Date
- Primitive - String, Boolean, Number

let userOne = {
    name :"Foo"
}

<!-- Impure Change -->
userOne.name = "Bar";

console.log(userOne.name);      // "Bar"

<!-- Pure Change -->
userOne = {
    name : "Bam"
}

let books = ["book1","book2"];

pure : false

books.push("book3");


books = ["book1", "book2", "book3"]         // will run

books = ["book1", "book2", "book3"]        // will run
books.push("book3");                        // will not run



- Component Life Cycle Methods
: onChanges
: onInit
: doCheck
: afterContentInit
: afterContentChecked
: afterViewInit
: afterViewChecked
: onDestroy

- Directives
: Attribute - Can't change DOM template, add/remove styles/classes [ngClass, ngStyle]
: Structural - DOM template changed, [*ngFor, *ngIf, *ngSwitch]

- Pipes : to format the UI
: titlecase
: uppercase
: lowercase
: date
: currency
: percent
: json
: async - hold the state, waiting....
: Custom Pipe - CountryCode, Reverse 
    - Pure -> runs on Pure changes
    - Impure -> run on both pure and impure changes

- Forms
: Template Driven [ngModel -> FormsModule]
    - Validation logic inside template
    - HTML validations
    - complete form is referred as "ngForm"
    - States / Classes
        : ngValid / ngInvalid
        : ngTouched / ngUntouched
        : ngDirty / ngPristine
: Model Driven / Reactive Form


- Reactive Forms
- Services
- HttpClient [XMLHttpRequest Calls / Remote Server Calls]
- Observables - "rxjs"



- Self Service Registration - 'providedIn' property

# angular-in-memory-web-api : Endpoints
> npm install angular-in-memory-web-api

# Observable - 
- Observers Data Source
- Stream on which event emitted at certain time interval
- Cancel/Unsubscribe the observable
- Publisher : publish event on the stream (input value, get/post, route, triggered in code)
- Consumer/Observer/Subscriber : subscribe the emitted data on the stream

Promise : are one shot





const position = notes.findIndex(() => {})
notes.splice(position, 1)



- Model Driven Forms
: Custom Validation
: Angular Validation
: Apply Validation on Model
: Sync forms
: FormControl, FormGroup, FormBuilder

- Services 
: Singleton
: DIP & SRP
: ES6 Classes with @Injectable()
: Controlled by Modules/Component (providers : [])

- HttpClientModule -> HttpClient -> GET | POST etc
- Observable -> Stream on which data emitted at certain time interval

- Observable Operators
- Interceptors - inspect the outgoing request and incoming response
- Create SPA using Angular Router
- Modules


# Observable Types
- Subject
- BehaviourSubject
- AsyncSubject
- ReplaySubject

# Observable Operators
- map
- take
- tap
- skip
- debounce
- throttle
- of
- from
- fromEvent
- concat
- fork

> ng g s services/request-interceptor

# RBAC - Role Based Access Control

# Build Command
> ng build --prod

# Web Reference
- https://javascript.info/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://www.typescriptlang.org/
- https://angular.io/
- https://reactivex.io/
- https://rxjs.dev/