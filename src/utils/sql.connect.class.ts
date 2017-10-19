import * as Sequelize from 'sequelize'
import { sqlOpt } from '../config'
export class SqlConnect extends Sequelize {
  name: string
  constructor(name: string) {
    super(name, sqlOpt.name, sqlOpt.pwd, {
      host: sqlOpt.host,
      dialect: 'mysql',
      port: sqlOpt.port,
      pool: {
        max: 5000,
        min: 0,
        idle: 10000
      }
    })
  }
}
