import {SqlConnect} from '../utils/sql.connect.class'

const sequelize = new SqlConnect('leezii')

export class UserModel {
  user = sequelize.define(
      'user',
      {
        name: {
          type: SqlConnect.STRING,
          primaryKey: true,
        },
        pwd: SqlConnect.STRING,
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
}
