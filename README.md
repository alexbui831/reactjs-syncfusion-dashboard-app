
<img width="1440" alt="Screen Shot 2022-09-18 at 9 03 29 PM" src="https://user-images.githubusercontent.com/61631923/190939215-32ad7b00-408f-4572-9024-19a088972902.png">

<img width="1440" alt="Screen Shot 2022-09-18 at 9 03 34 PM" src="https://user-images.githubusercontent.com/61631923/190939219-21e0dc97-5638-49f2-8bfa-e95d608c2c3c.png">

<img width="1440" alt="Screen Shot 2022-09-18 at 9 03 35 PM" src="https://user-images.githubusercontent.com/61631923/190939224-b6c92196-e394-4135-a3cb-a9e15341f17e.png">



# NOTES BY ALEXANDER BUI ABOUT THIS DASHBOARD PROJECT

# AUG 25

The importance of creating an app with correct file structure allows easier management throughout the whole coding process

# AUG 26

There was an error code:
'Line' is not defined react/jsx-no-undef
'Editor' is not defined react/jsx-no-undef
I fixed it by looking through the components first but couldn't find anything, then I realized it must be something with the imports and fixed it by adding 'Line' and 'Editor" in the imports

# AUG 27

An issue when I had the activeMenu = 'true', the Navbar would still be opened. It was due to a '$' character I thought I had to use before an '{activeMenu}' call in my ` string

# AUG 28

A contextProvider is used to pass data data through a component tree without having to manually pass props,
JSX does not allow class=, u need className=

# SEPT 1

Syncfusion is really useful for creating data tables, makes adding functionalities way easier
Issue with deconstructing a color value realizing it did not need any deconstructing due to it already being a string

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
