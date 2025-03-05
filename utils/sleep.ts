export const sleep = (time: number = 120_000): Promise<void> =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(`Sleep time ${time} is over`);
      resolve();
    }, time),
  );
