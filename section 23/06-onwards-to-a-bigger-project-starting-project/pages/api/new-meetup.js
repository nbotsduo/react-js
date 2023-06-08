// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body;

        
        const client=MongoClient.connect('mongodb://localhost:27017/meetups');
        const db=client.db;

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        client.close();
        
    }
}

export default handler;