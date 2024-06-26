import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir

// router.get('/', loginRequired, userController.index); // Lista todos os usuários
// router.get('/:id', userController.show); // Lista um usuário

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

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
