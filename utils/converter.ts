export const converterFontSize = (innerWidth: number, value: number) => {
  const basicSize = 14;

  return innerWidth >= 3000
    ? (value / basicSize) * 22
    : window.innerWidth >= 2800
    ? (value / basicSize) * 20.5
    : window.innerWidth >= 2600
    ? (value / basicSize) * 19
    : window.innerWidth >= 2400
    ? (value / basicSize) * 17.5
    : window.innerWidth >= 2000
    ? (value / basicSize) * 15.5
    : value;
};

export const converterForTimer = (t: string, isTimer = false) => {
  const array = t.split('.');
  array.splice(1, 0, isTimer ? ':' : '.');

  return array;
};

export const converterDate = (param: string): string => {
  const date = new Date(param);
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
