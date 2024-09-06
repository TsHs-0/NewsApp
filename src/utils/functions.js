const returnDateValueWithZero = data => {
  return `${data < 10 ? '0' + data : data}`;
};

export const getStringData = date => {
  const newDate = new Date(date);
  const day = returnDateValueWithZero(newDate.getDay() + 1);
  const month = returnDateValueWithZero(newDate.getMonth() + 1);
  const year = newDate.getFullYear();

  return `${day}.${month}.${year}`;
};
