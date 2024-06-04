import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {

  static init(sequelize) {


    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 a 255 caracteres'
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 a 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existente'
        },
        validate: {
          isEmail: {
            msg: 'Email Inválido'
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro'
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero inteiro ou decimal'
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um numero inteiro ou decimal'
          }
        }
      }
    }, {
      sequelize
    });
    return this;

  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }

}
