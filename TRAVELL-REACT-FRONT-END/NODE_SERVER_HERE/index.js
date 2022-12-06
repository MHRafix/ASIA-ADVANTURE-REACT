const express = require('express');

// Import mongodb, cors, objectId and dotenv
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
// App and Port
const app = express();
const port = process.env.PORT ||5000;


// MidleWere
app.use(cors());
app.use(express.json());


// Server to database connection uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ttpfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


/********************************************
 * Node server crud operation start from here
 ********************************************/

async function run() {
    try {
        await client.connect();

        // Recognize the database and data collection
        const database = client.db('asiaAdvanture'); // Database name
        const packagesCollection = database.collection('travelPackages');
        const bookingCollection = database.collection('BookedPackages');

        // Post Package API
        app.post('/travelPackages', async(req, res) => {
        const package = req.body;
        const result = await packagesCollection.insertOne(package);
        res.json(result);
       
        });
 
        // Booked Package API
        app.post('/BookedPackages', async(req, res) => {
        const package = req.body;
        const result = await bookingCollection.insertOne(package);
        res.json(result);
       
        });

        // Get the packages data from the database using get api
        app.get('/travelPackages', async (req, res) => {
            const findPackages = packagesCollection.find({});
            const packages = await findPackages.toArray();
            res.send(packages);
        });
  

        // Get the booked packages data from the database using get api
        app.get('/myOrders', async (req, res) => {
            const bookedPackages = bookingCollection.find({});
            const bookedPackage = await bookedPackages.toArray();
            res.send(bookedPackage);
        });


        // Delete the packages from the database using delete api
        app.delete('/myOrders/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id:ObjectId(id) };
            const result = await bookingCollection.deleteOne(query);
            console.log(query);
            res.json(result);
        });



    }

    finally {
        // await client.close()
    }

}

// Call the async function
run().catch(console.dir);


/****************************************
 * Node server crud operation end to here
 ****************************************/




// Check server is running or not
app.get('/', (req, res) => {
    res.send('Running asia advanture limited server!');
});

// Listen server what we do here
app.listen(port, () => {
    console.log("Asia advanture limited app listening.");
})










