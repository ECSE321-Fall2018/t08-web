# Rideshare Web

### Quick Links
- [Our Heroku website](https://rideshareadmin.herokuapp.com)
- [Our Heroku dashboard](https://dashboard.heroku.com/apps/rideshareadmin)
- [Our wiki](https://github.com/ECSE321-Fall2018/t08-web/wiki)
- TravisCI build?

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
3. Install Yarn.
    1. It's basically NPM but faster.
    2. Run `npm i yarn@1.12.3 -g`.
4. Clone the project: `git clone https://github.com/ECSE321-Fall2018/t08-web.git`
5. There's one thing missing in the project that you need to install yourself.
    1. The project you cloned is missing a folder called `node_modules`.
    2. It contains all our node modules (library code).
    3. However, it's like 50 MB, so I told Git to ignore it.
    4. **To install the missing node modules, it's very easy, just run: `yarn install`**

Note: If you are on Mac or Linux, you may need to include `sudo` in the beginning of your `npm i` command.

### Live Reloading When Editing
There's this really cool feature in Vue called live (or hot) reloading.
If you edit and save a file in the project, the website will automatically reload to reflect those changes.
Here's how to try it out:
1. Run `yarn run serve`
2. The terminal will tell you which URL you can use to see the website.
3. Change a string in a Vue file for example and save. Your website will immediately reload!

### Coding Conventions
Please follow these conventions when writing JS code:
1. Use single quotes over double quotes (do this for HTML too).
2. Don't use semicolons.
3. Use `let` instead of `var` to declare your variables.
4. Variable names should be in "camelCase". Search it up if you don't know what it means.

Note: There are a few exceptions to the above rules. But most of the time, please follow them.

### Store
never mind, watch that last video

### Weird Syntax to Watch Out For

### Using Javascript to Make API Requests

### Muse UI
Our Vue project uses a UI library called [Muse-UI](https://muse-ui.org/#/en-US). Basically, it provides a bunch of nice-looking components that we can use. This way, we don't have to code these components from scratch, which means less a lot less CSS to write.

### Run Unit Test
```
yarn run test:unit
```

### Configure Vue Settings
See [Vue Configuration Reference](https://cli.vuejs.org/config/).