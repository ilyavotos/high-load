import { QueryInterface } from "sequelize";

type Props = { context: QueryInterface };

export const up = async ({ context: queryInterface }: Props) => {
  await queryInterface.bulkInsert("users", [
    {
      balance: 10000,
    },
  ]);
};
