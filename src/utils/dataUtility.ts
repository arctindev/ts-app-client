export const dataUtility = (date: string) => {
  const array = date.split('-');
  return `${array[2]} / ${array[1]}`;
};

export const dataUtilityDay = (date: string) => {
  const array = date.split('-');
  return `${array[2]}`;
};

export const dataUtilityYear = (date: string) => {
  const array = date.split('-');
  return `${array[0]}`;
};

export const dataUtilityMonth = (date: string) => {
  const array = date.split('-');
  return `${array[1]}`;
};
