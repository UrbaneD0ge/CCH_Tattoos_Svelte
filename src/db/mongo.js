import { MongoClient } from 'mongodb';
import { MONGO_URL } from '$env/static/private';

const client = new MongoClient(MONGO_URL);

// set connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // BSON options
  ignoreUndefined: true,

};

export function start_mongo() {
  console.log('Connecting to MongoDB...')
  return client.connect();
};

export default client.db();