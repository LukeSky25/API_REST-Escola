"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveriam existir

// router.get('/', loginRequired, userController.index); // Lista todos os usuários
// router.get('/:id', userController.show); // Lista um usuário

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*  Os 5 Métodos possiveis em uma rota/controller

index -> Lista todos os usuarios -> GET
store/create -> Cria um novo usuario -> POST
delete -> Apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT (
  Patch - Altera apenas um valor
  Put - Pega um objeto inteiro e o substitui por um outro objeto inteiro
)

*/
