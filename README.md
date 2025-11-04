 Drinkers Delight — Simple Express + EJS App

A small demo web app that uses Express.js and EJS templates to display a simple drink shop website with search, register and survey forms.

## What this project contains

- `index.js` — application entry (Express setup, view engine, static files)
- `routes/main.js` — application routes and the `shopData` object (shopName, productCategories, shopLocations)
- `views/` — EJS templates: `index.ejs`, `about.ejs`, `search.ejs`, `register.ejs`, `survey.ejs`, etc.
- `public/css/style.css` — CSS for the site (served as a static file)
- `package.json` — project dependencies

## Prerequisites

- Node.js (12+ recommended)

## Install

1. From the project root, install dependencies:


 `npm init`
 `npm install express`
 `npm install ejs`


## Run

Start the app using Node:


node index.js
```

By default the app listens on port `8000`. Open `http://localhost:8000` in your browser.

## Useful routes

 `/` — home page 
 `/about` — about page 
 `/search` — search form
 `/search_result` — search result 
 `/register` — registration form
 `/registered` — registration POST handler
 `/survey` — survey form
 `/survey-complete` — survey POST handler


