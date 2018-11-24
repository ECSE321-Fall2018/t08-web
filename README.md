# RideShare Web

### Quick Links
- [Our Heroku website](https://rideshareadmin.herokuapp.com)
- [Our Heroku dashboard](https://dashboard.heroku.com/apps/rideshareadmin)
- [Our Wiki](https://github.com/ECSE321-Fall2018/t08-web/wiki)
- [Our RESTful API and Android Application Repository](https://github.com/ECSE321-Fall2018/t08)

### Login Credentials for Administrator Website
In order to access the administrator website, the following credentials can be used.
* Username: `admin`
* Password: `password`

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
No, a store is not a place where you buy things.

In the past, our state data was across a bunch of different files, which made it really hard to keep track of it. It was just messy. So I put all the state data in one file called `store.js`. You can look for it in our project right now and see what it contains.

In fact, if you go to our website, open up the web console, and enter `store`, it will return you our store data! Really nice for debugging.

### Looping Through Arrays/Objects
- [List of JS array methods](https://www.w3schools.com/jsref/jsref_obj_array.asp)
- [for-in loop](https://www.w3schools.com/jsref/jsref_forin.asp)
- You can also search up `for-of` loop if you want.

### Using JS Fetch to Make API Requests
Javascript provides us with the method `fetch()` to retrive data from the backend.

Here's an example of how to make a GET request in Javascript. This gets a user's details:
```JS
fetch('https://rideshare08.herokuapp.com/api/user/users/58?adminusername=jeffery&adminpass=password')
.then(response => response.json()) // turns it into JSON data
.then(jsonObject => console.log(jsonObject)) // print it out on the web console
```
If you run it in the web console (Right-click -> Inspect Element), you'll probabaly get a promise with the value:
```JS
{
    emailAddress: "cyril@email.com"
    fullName: "Cyril Driver"
    password: "s47aw+yRqRXA9G2EJecxqGmQNNQvNLY+I7JHJ8pVQhw=$aYx++jXZOuy/dAf5n8n3IHDMPqM5GsRU4UFgND00N6o="
    role: "Driver"
    status: true
    tripnumber: 4
    userID: 58
    username: "cyril"
}
```
If you get the error "Unexpected end of JSON input", it means the backend has nothing to return.

                

If you make a request that isn't a GET request, you have to specify what request it is.
Here's an example of a POST request that gets all active users and drivers:
```JS
fetch('https://rideshare08.herokuapp.com/api/trip/usertripstatus?username=jeffery&password=password&status=2&role=Passenger', {method: 'POST'}) // here we specify POST
.then(response => response.json())
.then(jsonObject => console.log(jsonObject))
```
It'll return JSON objects of passengers in a trip right now.

You can also include error handling: `.catch(e => console.log(e))`

### Using JS Axios to Make API Requests
Axios makes things even easier. Just import the file I created, `axios.js`, like this:
```JS
import axios from '@/axios.js'
```

Then you can write shorter API request code:
```JS
/* Fetch Example 1 */
axios.get('/user/users/58?adminusername=jeffery&adminpass=password')
// Skip the turning into JSON data process
.then(jsonObject => console.log(jsonObject))

/* Fetch Example 2 */
axios.post('/trip/usertripstatus?username=jeffery&password=password&status=2&role=Passenger')
.then(jsonObject => console.log(jsonObject))
```

### Weird Syntax to Watch Out For
Template strings:
```JS
let a = 'jam'
let b = 'butter'

// The plus signs are kinda annoying
let c = 'I love ' + a + 'and' + b + '!'

// A lot easier to read
let d = `I love ${a} and ${b}!`
```

Arrow syntax:
```JS
function add(x, y) {
    return x + y
}

// is the same as

add = (x, y) => {
    return x + y
}

// is the same as

add = (x, y) => x + y
```

Destructuring:
```JS
let object = {
    drivers: driverData,
    passengers: passengerData,
    trips: tripsData, // yes, this comma is allows
}
// `object.drivers` returns `driverData`

let {drivers, passengers, trips} = object
// Now `drivers` also returns `driverData`
```

Spread/Rest operator:
```JS
let object = {
    a: 'apple',
    b: 'bear',
    c: 'cat',
}

let biggerObject = {
    ...object,
    d: 'dog'
}
// `biggerObject` contains everything that `object` has and then some

let clonedObject = {...object} // how to clone objects in JS
let clonedArray = [...array] // how to clone arrays in JS
```


### Muse UI
Our Vue project uses a UI library called [Muse-UI](https://muse-ui.org/#/en-US). Basically, it provides a bunch of nice-looking components that we can use. This way, we don't have to code these components from scratch, which means less a lot less CSS to write.

### Run Unit Test
```Bash
yarn run test:unit
```

### Configure Vue Settings
See [Vue Configuration Reference](https://cli.vuejs.org/config/).

- [Vue Video Tutorial](https://www.youtube.com/watch?v=mZY1yyrlJWU&list=PLoYCgNOIyGADZuvKJweutZDOO9VI9YiJ9)
