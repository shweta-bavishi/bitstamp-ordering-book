const convertString = (str, pos) => str.substring(...pos).toUpperCase();

export const serializeData = (data, conversionValue) => {
  const res = [];
  const leftStr = convertString(conversionValue, [0, 3]);
  const rightStr = convertString(conversionValue, [3]);
  const getData = (data, index) =>
    `${data[index][1]} ${leftStr} @ ${data[index][0]} ${rightStr}`;

  data?.bids?.map((val, index) =>
    res.push([`${getData(data.bids, index)}`, `${getData(data.asks, index)}`]),
  );
  return res;
};
