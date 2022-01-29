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
        const plannerCollection = db.collection('planner');
        const plannerRouter = createRouter(plannerCollection);
        app.use('/api/planner', plannerRouter);
    })
    .catch(console.error)

app.listen(5000, function(){
    console.log(`Listening on port ${ this.address().port }`);
});