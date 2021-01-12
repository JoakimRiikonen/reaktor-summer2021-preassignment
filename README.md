# reaktor-summer2021-preassignment

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
#### Backend
```
cd backend/
npm install
```

#### Frontend
```
cd frontend/
npm install
```

### Usage
#### Running the backend
```
cd backend/
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