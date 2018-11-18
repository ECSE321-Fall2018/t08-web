var express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
var history = require('connect-history-api-fallback');
var app = express();


history({
  index: '/',
  rewrites: [{from: /\/login/, to: '/'}],
});

app.use(history());

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
  