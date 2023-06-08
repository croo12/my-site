import { MongoClient, MongoClientOptions } from "mongodb";

const URL : string = `mongodb+srv://its19447:dlduddn1@portfolio.oshygre.mongodb.net/?retryWrites=true&w=majority`;
const options : MongoClientOptions = {};

let mongo : Promise<MongoClient> | undefined;

let connectDB : Promise<MongoClient> | undefined;

if (process.env.NODE_ENV === 'development') {
  if (!mongo) {
    mongo = new MongoClient(URL, options).connect();
  }

  connectDB = mongo;
} else {
  connectDB = new MongoClient(URL, options).connect();
}

export { connectDB };
