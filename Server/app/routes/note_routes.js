const ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {
    app.post('/todoList', (req, res) => {
        const itemValue = { itemValue: req.body.itemValue, isComplete: false };
        const dbo = db.db('todoList')
        dbo.collection('todoList').insertOne(itemValue, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send({id: result.ops[0]._id, itemValue: result.ops[0].itemValue, isComplete: false});
            }
        });
    });


    app.get('/todoList', (req, res) => {
        const dbo = db.db('todoList')
        dbo.collection('todoList').find({}).toArray((err, result) => {
            const itemProp = result.map(item => ({ id: item._id, itemValue: item.itemValue, isComplete: item.isComplete }));
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(itemProp);
            }
        });
    });

    app.delete('/todoList/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const dbo = db.db('todoList')
        dbo.collection('todoList').deleteOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    app.put('/todoList/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const itemProp = { $set: {itemValue: req.body.itemValue }};
        const dbo = db.db('todoList')
        dbo.collection('todoList').updateOne(details, itemProp)
        .then(()=>{
            res.send();
        });
    });

    app.post('/todoList/:id/complete', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id)};
        const isComplete = { $set: {isComplete: true }};
        const dbo = db.db('todoList')
        dbo.collection('todoList').updateOne(details, isComplete)
        .then(() => {
        res.send();
        })

    })

};