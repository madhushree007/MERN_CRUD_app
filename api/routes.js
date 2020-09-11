const { StockUser } = require('../models/StockUser');

const routes = require('express').Router();

//Create User
routes.post('/register', async (req, res) => {
    //res.send("Post reached");
    try {
        const user = new StockUser({
            username: req.body.username,
            password: req.body.password
        });
        await user.save();
        res.status(200).send("Sucess");
    } catch (err) {
        throw err;
    }
});

// Get all users
routes.get('/', (req, res, next) => {
    StockUser.find({}, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.send(data);
        }
    })
});

// Get single users by ID
routes.get('/edit/:id', (req, res, next) => {
    //console.log(req.params.id);
    StockUser.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.send(data);
        }
    })
})

//Update user
routes.put('/update-user/:id', (req, res, next) => {
    StockUser.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = routes;