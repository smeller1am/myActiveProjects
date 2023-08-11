export const renderPrice = (price: number | string | undefined) =>
  price && `${price} ₽`;

export const renderWeight = (weight: number | string | undefined) =>
  weight && `${weight} г`;

export const renderPFC = (...grams: (number | string | undefined)[]) =>
  grams.filter(Boolean).map(renderWeight).join(' / ');
