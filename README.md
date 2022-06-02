# Express Fitness

A new fantastic fitness place called Express Fitness has just opened up.

Your job will be to be to begin building a custom app that keeps track of numerous essential resources for the business-like - locations, people, special events, plans, and equipment.

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

```
npm install
```

This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

You can run the following command from the command line to run the tests. You will need to be in the root directory of your local directory.

```
npm test
```

## Instructions

### Getting Started

Your goal is to organize your folders and files following the MVC architecture you've learned in class. Your final folder and file structure should look like this:

```
├── __tests__
│  └── app.test.js
├── controllers
│  ├── locations.controller.js
│  ├── machines.controller.js
│  ├── persons.controller.js
│  ├── plans.controller.js
│  └── special-events.controller.js
├── models
│  ├── location.model.js
│  ├── machine.model.js
│  ├── person.model.js
│  ├── plan.model.js
│  └── special-event.model.js
├── node_modules
├── app.js
├── package-lock.json
├── package.json
├── README.md
├── sample-data.js
└── server.js
```

**NOTE:** With Express, you are free to name your files and folders whatever you want. If you're going to name your `controllers` folder `asdf` and your `models` folder `batman` - you can. However, no one will understand how your code is organized with names that don't make sense/are not semantic(the name relates to what it is).

Because Express is unopinionated, you will likely see various names for different files. For example, when it comes to controllers, you may see:

- birdController.js
- birdsController.js
- birds.js
- birds-controller.js
- birds-controllers.js
- birds.controller.js

When you join a company, they will have chosen a naming strategy, and you should follow it. Within your work, your naming should be consistent within each project.

Within this project, it is expected that your controllers file names are `resources.controller.js`, where `resources` is the plural form of the resource - for example, `plans` should be `plans.controller.js`.

### Build a Basic Express App

Install the necessary npm packages. Build a basic express server that says "Hello, world!" at the `/` route

### Models

Because Express is unopinionated, you will likely see various names for different files. For example, when it comes to controllers, you may see:

- bird.js
- birds.js
- birdsModel.js
- bird.model.js

For each model, make a folder with the appropriate file name. E.g. `locations` should be a file located and named like so: `/models/location.model.js`.

Be sure to export each 'model'.

#### Locations

```js
[
  {
    street: "45 Davis Street",
    city: "Long Island City",
    state: "NY",
    zip: "11101",
  },
  {
    street: "23 Broadway",
    city: "New York",
    state: "NY",
    zip: "11011",
  },
];
```

#### Persons

```js
[
  {
    name: "Najee",
    role: "member",
    plan: "gold",
    mainLocation: "11101",
  },
  {
    name: "Salina",
    role: "staff",
    plan: "staff",
    mainLocation: "11101",
  },
  {
    name: "Amandine",
    role: "member",
    plan: "silver",
    mainLocation: "10011",
  },
];
```

#### Plans

```js
[
  {
    type: "bronze",
    price: 100,
    extras: [],
  },
  {
    type: "silver",
    price: 200,
    extras: ["Laundry service", "Free smoothie each visit"],
  },
  {
    type: "gold",
    price: 300,
    extras: ["Personal locker", "Monogrammed robe", "Sauna access"],
  },
];
```

#### Machines

```js
[
[
 {
 brand: "Bowflex",
 model: "Bowflexer 4000",
 type: "Extreme Fitness Bench",
 purchased: 1986,
 location: 11101,
 },
 {
 brand: "Bowflex",
 model: "Bowflexer 4000",
 type: "Extreme Fitness Bench",
 purchased: 1996,
 location: 11101,
 },
 {
 brand: "Bowflex",
 model: "Bowflexer 4000",
 type: "Extreme Fitness Bench",
 purchased: 2006,
 location: 10011,
 },
];


```

#### Special Events

```js
[
  {
    name: "Cinco De Muscles",
    date: "May 5, 2022",
    description: "Attend up to 5 fitness classes in one day, no extra cost!",
  },
  {
    name: "Lost Sock Memorial Day",
    date: "May 9, 2022",
    description:
      "Come together as a community to honor all the lost socks that have helped us with our fitness quests. Donate a lost sock, and get a protein smoothie!",
  },
  {
    name: "Hallowhoa",
    date: "October 31, 2022",
    description:
      "Professional photographers will be taking photos all day. Get your photo taken and share your hard work on every social media platform you want!",
  },
];
```

### Create Controllers for Each Model

Following the same file and folder structure as in class, create the correct files. E.g. `locations` should be `/controllers/locations.controller.js`.

Each controller should serve an index (an array of all of the objects of the resource) at the matching route.

You should now be able to visit:

- http://localhost:3333/locations
- http://localhost:3333/people
- http://localhost:3333/plans
- http://localhost:3333/equipment
- http://localhost:3333/specialEvents

And see the associated resource.

### Create a Catchall/404 Route

Add a 404 route so that when the URL does not match any of the routes, there will be a "Sorry, no page found." message.

### Bonuses

If you are using a Mac and are creating, moving, or deleting files using the operating system/GUI (click and drag/create using two-finger clicks on the desktop) - a `.DS_Store` file will be created. If you don't want `.DS_Store` files tracked by git and uploaded to GitHub, what can you do?

Let's create a route that provides more information. For example, let's see the details of a location and the people associated with that location:

- http://localhost:3333/locations/people

```js
locations: [
  {
    street: "45 Davis Street",
    city: "Long Island City",
    state: "NY",
    zip: "11101",
    people: [
      {
        name: "Najee",
        role: "member",
        plan: "gold",
        mainLocation: "11101",
      },
      {
        name: "Salina",
        role: "staff",
        plan: "staff",
        mainLocation: "11101",
      },
    ],
  },
  {
    street: "23 Broadway",
    city: "New York",
    state: "NY",
    zip: "11011",
    members: [
      {
        name: "Amandine",
        role: "member",
        plan: "silver",
        mainLocation: "10011",
      },
    ],
  },
];
```

If you've completed the previous bonus, either go back to or check out [Express UFO](https://github.com/joinpursuit/express-ufo)
