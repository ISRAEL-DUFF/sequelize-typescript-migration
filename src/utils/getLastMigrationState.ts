import { SEQUELIZE_META_MIGRATION_TABLE_NAME, SEQUELIZE_META_TABLE_NAME } from "@src/constants";
import { Sequelize } from "sequelize-typescript";
export default async function getLastMigrationState(sequelize: Sequelize) {
  const [
    lastExecutedMigration,
  ] = await sequelize.query(
    `SELECT name FROM ${SEQUELIZE_META_TABLE_NAME} ORDER BY name desc limit 1`,
    { type: "SELECT" }
  );

  const lastRevision: number =
    lastExecutedMigration !== undefined
      ? parseInt(lastExecutedMigration["name"].split("-")[0])
      : -1;

  const [
    lastMigration,
  ] = await sequelize.query(
    `SELECT state FROM ${SEQUELIZE_META_MIGRATION_TABLE_NAME} where revision = '${lastRevision}'`,
    { type: "SELECT" }
  );
  return lastMigration ? lastMigration["state"] : undefined;
}
