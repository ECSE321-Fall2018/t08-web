const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
let history = require('connect-history-api-fallback');
let middleware = history({
  index: '/',
  rewrites: [{from: /\/login/, to: '/'}],
});


app.use(middleware);
const port = process.env.PORT || 80;
app.listen(port);

/* let connect = require('connect');

let app = connect()
  .use(history())
  .listen(3000); */


// let app = express();


  
/*   history({
    rewrites: [
      {
        from: /^\/libs\/.*$/,
        to: function(context) {
          return '/bower_components' + context.parsedUrl.pathname;
        }
      }
    ]
  }); */

  /* history({
    verbose: true
  });
  
  history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
  });

  history({
    disableDotRule: true
  });
 */
  