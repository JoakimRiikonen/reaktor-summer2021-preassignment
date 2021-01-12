# reaktor-summer2021-preassignment

### [Live site](https://www.joakimriikonen.dev/)
IMPORTANT NOTE: The first load might be really slow because the heroku dyno is probably asleep. Additionally, during the bootup the server takes a while to fetch the initial data from the "legacy"-api, which means that the frontend can't fetch any data from the server for a minute or so.

## About
My submission for the reaktor summer 2021 pre-assignment for junior developers. The server fetches products from a "legacy"-api and caches and formats the results for faster usage. The frontend fetches the data from the server and lists the products by category.

### Further improvements
+ Pagination or infinite scrolling. The performance is currently pretty bad because the app renders all of the products in the selected category. However, this wasn't required.
+ Integration and/or end-to-end tests

## Getting started

### Prerequisites
+ npm >= 6.14.0
+ node >= 14.0.5

### Installing
#### Server
```
cd server/
npm install
```

#### Frontend
```
cd frontend/
npm install
```

### Usage
#### Running the server
```
cd server/
npm run start
```

#### Running the frontend
```
cd frontend/
npm start
```

## Built using
+ [NodeJs](https://nodejs.org/en/)
+ [Express](https://expressjs.com/)
+ [React](https://reactjs.org/)
