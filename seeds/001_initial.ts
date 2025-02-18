import { QueryInterface } from "sequelize";

type Props = { context: QueryInterface };

export const up = async ({ context: queryInterface }: Props) => {
  await queryInterface.bulkInsert("users", [
    {
      balance: 10000,
    },
  ]);
};

export const down = async ({ context: queryInterface }: Props) => {
  await queryInterface.bulkDelete("users", { id: 10000 });
};
