const {MongoClient} = require('mongodb');
require('dotenv/config');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    db = await connection.db(`bttrdb`);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('User');

    const mockUser = {
        "email": "rafael.ferreira@gmail.com.br",
        "username": "rafaelzin",
        "password": "1234"
    };

    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({email: "rafael.ferreira@gmail.com.br"});
    expect(insertedUser).toEqual(mockUser);
  });
});