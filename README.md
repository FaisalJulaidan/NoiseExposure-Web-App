###### Note: this README file is dedicated for the Web Application side of the project for further details about the other sides of the project i.e. Mobile Application, and Server Side, please check their repositories. You will need to install/setup all the three repositories for the project to work properly (e.g. retrive data from the database, login, etc.)  

###### Note: Make sure that the two sides, Mobile and Web Application, have the same IP address of the server. For furter deatils check the Project Installation section in every side's README file

## Motivation

Cardiff Council’s ultimate goal is to make Cardiff a better place to live, work and visit. Additionally, Cardiff Council are facing the need to reduce costs with the annual budget being reduced every year, while still maintaining a high level of service which is expected of them. Despite budget cuts, there is no desirable income to be gained from achieving the ultimate goal.
One way Cardiff Council hopes to achieve this, is through making Cardiff a smart city by the use of smart devices to collect data to better assist policy making.

In order to accomplish a smart city status, there is a strong emphasis on pollution in the Capital such as noise.
This is a major but also a usually overlooked issue facing the city, which can have an adverse effect on the health and productivity of residents. 
Cardiff Council want to be able to have detailed noise data that will allow them to understand trends and correlations as well as to get the public involved to solve these three core problems:

- Lack of detailed noise pollution data in the city to assist in policy and decision making
- Pure cost of monitoring noise levels is expensive
- Lack of awareness among Cardiff residents of the dangers of noise pollution

We believe that the best way to solve the problems above, is to create an Advanced Functionality Mobile and Web Application.
Our solution is a Mobile Application for the general public that will collect detailed noise level data based on the user’s location. This data would be aggregated together to be displayed on a Website in various visual forms such as tables and maps. This will educate and bring awareness to the user on how dangerous high noise levels can be to health and the environment.


## Tech/framework used

**Built with**

* Frontend framework - ReactJS
* Routing - react-router, history
* Map - google-maps-react
* HTTP Client - axios
* Styling: Ant Design, less, less-loader
* Text highliter: react-highlight-words
* Accessibility: jsx-a11y
* Testing: Enzyme

## Features

- [x] Authentication
- [x] Notifications
- [x] Noise data view in table and map
- [x] Filter, sort, search noise data
- [x] View personal noise data for logged in users (recorded via the Mobile app)
- [x] Highly dynamic and customised design



## Project Installation
##### 1. Clone the project

```bash
git clone git@gitlab.cs.cf.ac.uk:c1628682/nea_web.git
```

##### 2. Install dependencies 
```bash
npm install
```

##### 3. Change IP adress on line 5 in package.json to your device's IP address that runs the Flask server
```bash
"proxy": "http://'Your IP Address':5000",
# "proxy": "http://192.168.43.20:5000",

```

##### 4. Start the application 
```bash
npm run start
```


## How to Use the Web Application
All the data avaiable in the application is public and doesn't require loggin in, howerver, when logged in, you can filter and view your personal noise data

Please use the below test accounts to login:

username: *test@test.com*  
password: *123*  

username: *test2@test.com*  
password: *123*  

To view your personal data, trun on the "view your own data" switcher at the right top cornet of the page which become activated after you are logged in  

## Status Code

The kind of responses you might recieve are
- 200 - OK
- 400 - Bad Request
- 500 - Internal Server Error
- 401 - Unauthorized
- 201 - Created (Resource created)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Contributors
Faisal, Ieuan, Joey, and Matthew
