import exp = require('constants');

export const manufacturer = {
  id: 1,
  name: 'Vlad',
  phone: '0000000000',
  siret: 1001
};

export const updatedManufacturer = {
  id: 1,
  name: 'Vladislav',
  phone: '1111111',
  siret: 1001
};

export const createCarResponseMock =   {
  id: 1,
  manufacturerId: 1,
  price: 200,
  firstRegistrationDate: '2020-04-22T08:05:54.215Z',
};

export const ownerResponseMock = {
  id: 1,
  name: 'Jack',
  purchaseDate: '2020-04-22T08:05:54.215Z',
  carId: 1
};

export const updatedOwnerResponseMock = {
  id: 1,
  name: 'Tom',
  purchaseDate: '2020-04-22T08:05:54.215Z',
  carId: 1
};

export const updatedCarResponseMock = {
  id: 1,
  manufacturer: updatedManufacturer,
  manufacturerId: 1,
  price: 400,
  firstRegistrationDate: '2020-04-22T08:05:54.215Z',
  owners: [updatedOwnerResponseMock]
};
