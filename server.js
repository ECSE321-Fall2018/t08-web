const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);

var history = require('connect-history-api-fallback');
/* var connect = require('connect');

var app = connect()
  .use(history())
  .listen(3000); */


var app = express();


var middleware = history({
  index: '/',
  rewrites: [{from: /\/login/, to: '/'}],
});


app.use(middleware);
  
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
  