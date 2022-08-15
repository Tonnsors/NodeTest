var Db = require('./dbconnections');
var express = require ('express');
var bodyParser = require('body-parser');
var cors = require ('cors');
var app = express();
var router = express.Router();
var libro = require('./libro');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next) => {
    console.log('middleware');
    next();
})

router.route('/libros').get((request,response) => {
    data=Db.getLibros().then((data) => {
        response.json(data[0]);
    })
})

router.route('/libros').post((request,response) =>{
    let libros = {
        ...request.body
    }
    Db.addLibros(libros).then(data => {
        response.status(201).json(data);
    })
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('libros API is running at ' + port);
