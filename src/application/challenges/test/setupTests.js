const mongoose = require('mongoose');

beforeAll(async () => {
  const url = process.env.MONGO_URL;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
