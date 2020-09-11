const app = require('express')();
const connectDB = require('./config/db')();
const routes = require('./api/routes');
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors());

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/routes', routes);



const port = 3001;



app.listen(port, () => console.log(`Server is running at port ${port}.`))