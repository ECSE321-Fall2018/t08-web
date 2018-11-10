# Rideshare Web

### Quick Links
- TravisCI build?
- Our Heroku website?
- Our Heroku dashboard?
- [Our wiki](https://github.com/ECSE321-Fall2018/t08-web/wiki)

### How to Get This Project On Your Computer
1. Make sure you have Node.js installed.
    1. Type `node -v` in the terminal. If it doesn't return a version number, you don't have Node.js installed.
    2. You can install it at the [nodeJS website](https://nodejs.org/en/) (get the "Latest Features" version).
    3. After you've set up Node.js, type `node -v` again just to make sure that it's installed.
2. Make sure you have NPM installed.
    1. NPM is a really easy way to install the libraries that you need for your Javascript projects.
    2. It stands for Node Package Manager.
    3. Type `npm -v` to check if it's installed (it'll return the version number).
    4. If NPM is not installed, run `npm install npm --global` or `npm i npm -g`.
    5. If you are on Mac or Linux, you may need to include `sudo` in the beginning of your terminal command.
3. Install Yarn.
    1. It's basically NPM but faster.
    2. Run `npm i yarn -g`.
    3. If you are on Mac or Linux, you may need to include `sudo` in the beginning of your terminal command.
4. Clone the project: `git clone https://github.com/ECSE321-Fall2018/t08-web.git`
5. There's one thing missing in the project that you need to install yourself.
    1. The project you cloned is missing a folder called `node_modules`.
    2. It contains all our node modules (library code).
    3. However, it's like 50 MB, so I told Git to ignore it.
    4. To install the missing node modules, it's very easy, just run: `yarn install`

### Live Reloading When Editing
There's this really cool feature in Vue called live (or hot) reloading.
If you edit and save a file in the project, the website will automatically reload to reflect those changes.
Here's how to try it out:
1. Run `yarn run serve`
2. The terminal will tell you which URL you can use to see the website.
3. Change a string in a Vue file for example and save. Your website will immediately reload!


### Run Unit Test
```
yarn run test:unit
```

### Create Project Build
To build our project:
```
yarn run build
```
We won't have to run this until we finish everything.

### Configure Vue Settings
See [Vue Configuration Reference](https://cli.vuejs.org/config/).