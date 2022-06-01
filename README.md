# Express Fitness

A new awesome fitness place called Express Fitness has just opened up.

Your job will be to be to begin building a custom app that keeps track of numerous important resources for the business like - locations, people, special events, plans and equipment.

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

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

## Instructions

### Getting Started

**NOTE:** With ExpressJs, you are free to name your files and folders whatever you want. If you want to name your `controllers` folder `asdf` and your `models` folder `batman` - you can. However, no one will understand how your code is organized with names that don't make sense/are note semantic.

Because ExpressJS is unopinionated, you will likely see a variety of names for different files. For example, when it comes to controllers, you may see:

- birdController.js
- birdsController.js
- birds.js
- birds-controller.js
- birds-controllers.js
- birds.controller.js

When you join a company, they will have chosen a naming strategy and you should follow it. Within your own work, your naming should be consistent within each project.

Within this project, it is expected that your controllers file names are `resources.controller.js`, where resources is the plural form of the resource - for example `plans` should be `plans.controller.js`.

### Build a Basic Express App

Install the necessary npm packages. Build a basic express server that says "Hello, world!" at the `/` route

### Models

For each model, make a folder with the appropriate file name. E.g. `locations` should be a file located and named like so: `/models/location.js`

Be sure to export each 'model'

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

#### People

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

#### Equipment

```js
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

#### Special-Events

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
      "Come together as a community to honor all the lost socks that have helped us with our fitness quests. Donate a lost sock, get a protein smoothie!",
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

Following the same file and folder structure as class, create the correct files. E.g. `locations` should be `/controllers/locations.controller.js`

Each controller should serve an index (an array of all of the objects of the resource) at the matching route.

You should now be able to visit

- http://localhost:3333/locations
- http://localhost:3333/people
- http://localhost:3333/plans
- http://localhost:3333/equipment
- http://localhost:3333/specialEvents

And see the associated resource.

### Bonuses

Let's create a route that provides more information. For example, let's see the details of a location and the people associated with that location:

- http://localhost:3333/locations/people

```js
    locations:[
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
        }
          ]
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
      ]
        },
      ],

```

If you've completed the previous bonus either go back to or check out [Express UFO](https://github.com/joinpursuit/express-ufo)
