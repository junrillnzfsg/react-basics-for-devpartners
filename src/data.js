import { range } from "ramda";
import faker from "faker";

const data = range(1, 10).map(() => ({
  email: faker.internet.email(),
  jobTitle: faker.name.jobTitle(),
  avatar: faker.image.avatar(),
  content: faker.lorem.paragraphs(),
  countryCode: faker.address.countryCode()
}));

export default data;
