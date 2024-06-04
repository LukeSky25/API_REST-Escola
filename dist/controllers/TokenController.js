"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {

  async store(req, res) {

    try {

      const { email = '', password = '' } = req.body;

      if (!email || !password) res.status(401).json({
        errors: ['Credenciais Inválidas']
      });

      const user = await _User2.default.findOne({ where: { email } });

      if (!user) res.status(401).json({
        errors: ['Usuário não existe']
      });

      if (!(await user.passwordIsValid(password))) res.status(401).json({
        errors: ['Senha inválida']
      });

      const { id } = user;
      const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION
      });

      return res.json({ token });

    } catch (e) {
      console.log(e);
    }

  }

}

exports. default = new TokenController();
