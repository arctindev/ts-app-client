export const dataUtility = (id: string) => {
  const array = id.split('-');
  return `${array[0]} / ${array[1]}`;
};

export const dataUtilityDay = (id: string) => {
  const array = id.split('-');
  return `${array[0]}`;
};

export const dataUtilityMonth = (id: string) => {
  const array = id.split('-');
  return `${array[1]}`;
};
