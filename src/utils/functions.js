const returnDateValueWithZero = data => {
  return `${data < 10 ? '0' + data : data}`;
};

export const getStringData = date => {
  const newDate = new Date(date);
  const day = returnDateValueWithZero(newDate.getDay());
  const month = returnDateValueWithZero(newDate.getMonth());
  const year = newDate.getFullYear();

  return `${day}.${month}.${year}`;
};
