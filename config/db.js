const mongoose = require('mongoose');
//const mongo_uri = "mongodb+srv://user_madhu:madhu2020@cluster0-klf9c.mongodb.net/madhu-test?retryWrites=true&w=majority";
const mongo_uri = "mongodb+srv://user_react:madhu2020@cluster0.tnfwl.mongodb.net/stock_react?retryWrites=true&w=majority";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        )
        console.log(`Mongodb connected at ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
