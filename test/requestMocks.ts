export const ownerPostMock = {
  name: 'Jack',
  purchaseDate: '2020-04-22T08:05:54.215Z',
  carId: 1
};

export const ownerPutMock = {
  name: 'Tom'
};

export const manufacturerPostMock = {
  name: 'Vlad',
  phone: '0000000000',
  siret: 1001
};

export const manufacturerPutMock = {
  name: 'Vladislav',
  phone: '1111111',
};


export const manufacturerPutMockBad = {
  id: 228,
  name: 'Vladislav',
  phone: '1111111',
};

export const carPostMock = {
  manufacturerId: 1,
  price:  200,
  firstRegistrationDate: '2020-04-22T08:05:54.215Z',
};

export const carPutMock = {
  price: 400
};
