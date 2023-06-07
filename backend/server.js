const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = " mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('newnew');
    const goals = database.collection('goals');
    // Query for a movie that has the title 'Back to the Future'
    const query = { subject: 'VLSI',topic:'CMOS inverter', date:'12',month:'6' };
    const goal = await goals.insertOne(query);
    console.log(goal);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);