## Getting Started with Create React App

- Run npm install
- create ".env" file in server

## ENV file

    PORT=8080
    DB_HOST=127.0.0.1
    DB_NAME=bulls_and_bears
    DB_USER=root
    DB_PASSWORD="your MySql P/W"
    JWT_KEY=e31e6b8a748b8bf91bbb650cbc576ea77cba0f8dd3f886b67da72fba8d453f5e
    POLY_API_KEY=eu8K1BFo96WCPC15v4pqdzp3br4b6goP
    ALPHA_API_KEY=B0PS7V42ZH0UGBBA
    TWELVE_API_KEY=5d0981849fad4e3f95ec389425f2e0fe

## In the project directory for both server and client, you can run:

- 'npm start'
- Runs the app in the development mode.\ Open http://localhost:3000 to view it in your browser.
- server will run on http://localhost:8080

## API limitations

# Alpha Vantage API

    - 75 API request per minute and 15 min delayed market data

# twelvedata API

    - 55 API request per minute
    - No daily or monthly request limit

# polygon API

    - 5 API calls per min

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Getting Started with Create React App

- Run npm install
- create ".env" file in server

## ENV file

    PORT=8080
    DB_HOST=127.0.0.1
    DB_NAME=bulls_and_bears
    DB_USER=root
    DB_PASSWORD="your MySql P/W"
    JWT_KEY=e31e6b8a748b8bf91bbb650cbc576ea77cba0f8dd3f886b67da72fba8d453f5e
    POLY_API_KEY=eu8K1BFo96WCPC15v4pqdzp3br4b6goP
    ALPHA_API_KEY=B0PS7V42ZH0UGBBA
    TWELVE_API_KEY=5d0981849fad4e3f95ec389425f2e0fe

## In the project directory for both server and client, you can run:

- 'npm start'
- Runs the app in the development mode.\ Open http://localhost:3000 to view it in your browser.
- server will run on http://localhost:8080

## API limitations

# Alpha Vantage API

    - 75 API request per minute and 15 min delayed market data

# twelvedata API

    - 55 API request per minute
    - No daily or monthly request limit

# polygon API

    - 5 API calls per min
