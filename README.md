# express-fitness

Awesome fitness place.

Build custom system

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

#### Build a Basic Express App

Install the necessary npm packages. Build a basic express server that says "Hello, world!" at the `/` route

#### Models

For each model, make a folder with the appropriate file name. E.g. `locactions` should be a file located and named like so: `/models/location.js`

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
    plan: "bronze",
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
  },
  {
    brand: "Bowflex",
    model: "Bowflexer 4000",
    type: "Extreme Fitness Bench",
    purchased: 1996,
  },
  {
    brand: "Bowflex",
    model: "Bowflexer 4000",
    type: "Extreme Fitness Bench",
    purchased: 2006,
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
