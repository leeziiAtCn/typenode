import {SqlConnect} from '../utils/sql.connect.class'

const sequelize = new SqlConnect('leezii')

export class UserModel {
  user = sequelize.define(
      'user',
      {
        username: {
          type: SqlConnect.STRING,
          primaryKey: true,
        },
        password: SqlConnect.STRING,
        createtime: SqlConnect.DATE,
      },
      {
        freezeTableName: true,
        tableName: 'user',
        timestamps: false,
      },
  )

  searchAll() {
    return this.user.findAll({
      where: {},
    })
  }

  createUser(params: { username: string, password: string }) {
    return this.user.create({
      username: params.username,
      password: params.password,
      createtime: +new Date(),
    })
  }
}
