const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const createRouter = require('./helpers/create_router');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
    .then((client) => {
        const db = client.db('recipes');
        const recipesCollection = db.collection('recipes');
        const recipesRouter = createRouter(recipesCollection);
        app.use('/api/recipes', recipesRouter);
        // app.post('/api/recipes', (req, res) => {
        //     const newData = req.body;
        //     recipesCollection
        //         .insertOne(newData)
        //         .then((result) => {
        //           res.json(result.ops[0]);
        //         })
        //         .catch((err) => {
        //           console.error(err);
        //           res.status(500);
        //           res.json({ status: 500, error: err });
        //         });
        
    })
    .catch(console.error)

app.listen(5000, function(){
    console.log(`Listening on port ${ this.address().port }`);
});