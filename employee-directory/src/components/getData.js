import faker from 'faker';

const createFakeRowData = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  city: faker.address.city()
});

export default () => Array.from({ length: 100 }, createFakeRowData);