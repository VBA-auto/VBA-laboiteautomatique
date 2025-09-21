
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; // Make sure to set this environment variable
const client = new MongoClient(uri);

const recondCarsData = [
  { "model": "Renault Captur", "carType": "Renault Captur Recondition", "engineType": "1.2 Essence", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Captur", "carType": "Renault Captur Recondition", "engineType": "1.5 Diesel", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Clio 4", "carType": "Renault Clio 4 Recondition", "engineType": "1.2 Essence", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Clio 4", "carType": "Renault Clio 4 Recondition", "engineType": "1.5 Diesel", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Megane", "carType": "Renault Megane Recondition", "engineType": "1.2 Essence", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Megane", "carType": "Renault Megane Recondition", "engineType": "1.5 Diesel", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Scenic", "carType": "Renault Scenic Recondition", "engineType": "1.5 Diesel", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Fluence", "carType": "Renault Fluence Recondition", "engineType": "1.5 Diesel", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Clio 4 RS", "carType": "Clio 4 RS Recondition", "engineType": "1.6 Essence", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Megane 4", "carType": "Renault Megane 4 Recondition", "engineType": "1.5 Diesel", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Clio 5", "carType": "Renault Clio 5 Recondition", "engineType": "1.3 Essence", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Twingo 3", "carType": "Renault Twingo 3 Recondition", "engineType": "0.9 Essence", "stock": 0, "condition": "Recondition", "paymentLink": "" },
  { "model": "Renault Twingo 3", "carType": "Renault Twingo 3 Recondition", "engineType": "1.0 Essence", "stock": 0, "condition": "Recondition", "paymentLink": "" }
]  

async function seedDB() {
  try {
    await client.connect();
    const database = client.db("VBA-laboiteautomatique-DB");
    const collection = database.collection("recond-cars");

    // Optional: Clear the collection before inserting new data
    await collection.deleteMany({});

    const result = await collection.insertMany(recondCarsData);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

seedDB().catch(console.dir);
