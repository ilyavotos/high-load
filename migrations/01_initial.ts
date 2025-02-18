import { QueryInterface } from "sequelize";
import { userModelAttributes } from "@models/user";

type Props = { context: QueryInterface };

export const up = async ({ context: queryInterface }: Props) => {
  await queryInterface.createTable("users", userModelAttributes);
};

export const down = async ({ context: queryInterface }: Props) => {
  await queryInterface.dropTable("users");
};
