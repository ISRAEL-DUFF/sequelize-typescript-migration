export interface IMigrationState {
  revision?: number;
  version?: number;
  tables: {};
}

// export const SEQUELIZE_META_TABLE_NAME = "SequelizeMeta"
// export const SEQUELIZE_META_MIGRATION_TABLE_NAME = "SequelizeMetaMigrations"

export const SEQUELIZE_META_TABLE_NAME = "sequelizemeta"
export const SEQUELIZE_META_MIGRATION_TABLE_NAME = "sequelizemetamigrations"