"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {

  async index(req, res) {

    try {

      res.json('Index');

    } catch (e) {
      console.log(e);
    }

  }

}

exports. default = new HomeController();
