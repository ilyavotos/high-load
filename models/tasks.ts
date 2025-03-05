import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "@config/database";
import { TaskSchema } from "@schemas/task";

export interface TaskModel extends TaskSchema, Model<InferAttributes<TaskModel>, InferCreationAttributes<TaskModel>> {}

export const taskModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  server: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  durationTime: {
    type: DataTypes.REAL,
  },
};

export const Task = sequelize.define<TaskModel>("task", taskModelAttributes, {
  tableName: "tasks",
  timestamps: true,
});
