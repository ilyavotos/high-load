import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "@config/database";

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: number;
  balance: number;
}

export const userModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  balance: {
    type: DataTypes.INTEGER,
  },
};

export const User = sequelize.define<UserModel>("user", userModelAttributes, { tableName: "users" });
