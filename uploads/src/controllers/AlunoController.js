import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {

  async index(req, res) {

    try {

      const aluno = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename']
        }
      });
      res.json(aluno);

    } catch (e) {
      console.log(e);
    }

  }

  async store(req, res) {

    try {

      const aluno = await Aluno.create(req.body);

      return res.json(aluno);

    } catch (e) {
      if (e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
        });
      }
    }

  }

  async show(req, res) {

    try {

      const { id } = req.params;

      if (!id) res.status(400).json({
        errors: ['Faltando Id']
      });

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename']
        }
      });

      if (!aluno) res.status(400).json({
        errors: ['Aluno não existe']
      });

      return res.json(aluno);

    } catch (e) {
      console.log(e);
      if (e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
        });
      }
    }

  }

  async update(req, res) {

    try {

      const { id } = req.params;

      if (!id) res.status(400).json({
        errors: ['Faltando Id']
      });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) res.status(400).json({
        errors: ['Aluno não existe']
      });

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);

    } catch (e) {
      console.log(e);
      if (e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
        });
      }
    }

  }

  async delete(req, res) {

    try {

      const { id } = req.params;

      if (!id) res.status(400).json({
        errors: ['Faltando Id']
      });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) res.status(400).json({
        errors: ['Aluno não existe']
      });

      await aluno.destroy();
      return res.json(`Aluno: ${aluno.nome}, deletado`);

    } catch (e) {
      console.log(e);
      if (e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
        });
      }
    }

  }

}

export default new AlunoController();
