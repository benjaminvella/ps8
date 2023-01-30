# Back

This part of the project contains the server and the business logic.

---

## Server

All requests are managed by `back/index.js`, which checks if the request is for a file 
(in which case it's treated by `queryManagers/front.js`) or is a REST request (managed by `queryManagers/api.js`).

Since `back/index.js` receives all the requests, it should also manage socket connections 
(that doesn't mean all the logic should be written in the file, you can add other queryManagers).

The architecture can be modified if you feel like it, but it will be up to you to debug.

### queryManagers/front.js

This file exports a `manage` method containing a fully commented HTTP server.

### queryManagers/front.js

This file exports an almost empty `manage` method which should be used to handle REST requests.
It also contains an example method to set up CORS policy.

---

## Logic

A folder `back/logic` has been created to handle the business logic of your website.

You're free to use it, move it, or not. You decide the architecture.

For now, it only contains an `ai.js` file with a function that can play a (~random) connect4 move.