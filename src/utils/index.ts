export const format = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}/${date.getFullYear()}`;
};
