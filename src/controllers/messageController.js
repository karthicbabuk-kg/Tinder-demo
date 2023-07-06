const { MongoClient } = require('mongodb');
const { Message } = require('../model/message');

const uri = process.env.URI;

const getMessages = async (req, res) => {
  const { userId, correspondingUserId } = req.query;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('app-data');
    const messages = database.collection('messages');

    const query = {
      from_userId: userId,
      to_userId: correspondingUserId,
    };
    const foundMessages = await messages.find(query).toArray();
    res.send(foundMessages);
  } finally {
    await client.close();
  }
};

const addMessage = async (req, res) => {
  const client = new MongoClient(uri);
  const message = req.body.message;

  try {
    await client.connect();
    const database = client.db('app-data');
    const messages = database.collection('messages');

    const insertedMessage = await messages.insertOne(message);
    res.send(insertedMessage);
  } finally {
    await client.close();
  }
};

module.exports = {
  getMessages,
  addMessage,
};
