export const formatCurrency = (value) => {
  let v;
  if (value && Number(value) >= 0) {
    v = Number(value);
  } else {
    v = 0.0;
  }

  const currency = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(v);

  return currency;
};
