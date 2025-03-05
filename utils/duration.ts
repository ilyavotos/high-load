export const getDurationTime = (timeStart: number = Date.now(), timeEnd: number = Date.now()): number => {
  return new Date(timeEnd - timeStart).getTime() / 1000;
};
