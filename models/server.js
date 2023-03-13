const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.userRoutePath = '/api/users';

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() { 
    //CORS
    this.app.use(cors());

    this.app.use(express.json());
   // this.app.use(express.urlencoded({ extended: false}));

    //Directorio Public
    this.app.use(express.static("public"));
  }

  routes() {
     this.app.use(this.userRoutePath, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Example app listening on port ${this.PORT}`);
    });
  }
}

module.exports = Server;
