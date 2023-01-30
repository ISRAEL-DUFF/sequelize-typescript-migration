import { QueryInterface } from "sequelize/types";
import {
  Sequelize,
  DataType as SequelizeTypescriptDataType
} from "sequelize-typescript";
import { SEQUELIZE_META_MIGRATION_TABLE_NAME, SEQUELIZE_META_TABLE_NAME } from "../constants";
export default async function createMigrationTable(sequelize: Sequelize) {
  const queryInterface: QueryInterface = sequelize.getQueryInterface();
  await queryInterface.createTable(SEQUELIZE_META_TABLE_NAME, {
    name: {
      type: SequelizeTypescriptDataType.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    }
  });
  await queryInterface.createTable(SEQUELIZE_META_MIGRATION_TABLE_NAME, {
    revision: {
      type: SequelizeTypescriptDataType.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    name: {
      type: SequelizeTypescriptDataType.STRING,
      allowNull: false
    },
    state: {
      type: SequelizeTypescriptDataType.JSON,
      allowNull: false
    }
  });
}
