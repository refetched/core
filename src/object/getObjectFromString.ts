export const getObjectFromString = <T extends object>(str: string): T => {
  return JSON.parse(str);
};
