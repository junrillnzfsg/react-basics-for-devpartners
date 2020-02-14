import { range } from "ramda";
import faker from "faker";

const data = range(0, 10).map(() => ({
  email: faker.internet.email(),
  jobTitle: faker.name.jobTitle(),
  avatar: faker.image.avatar(),
  content: faker.lorem.sentences(),
  countryCode: faker.address.countryCode()
}));

export default data;
