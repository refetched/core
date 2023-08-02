export const getStringFromObject = <T extends object>(obj: T): string => {
  return JSON.stringify(obj);
};
