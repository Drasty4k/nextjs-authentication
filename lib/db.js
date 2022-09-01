import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://nasa-api:9wwoMm6xDK11cDFw@nasacluster.tq0kilu.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
