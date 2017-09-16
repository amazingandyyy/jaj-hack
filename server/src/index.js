import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=> {
    res.send({
        repo: "https://github.com/amazingandyyy/jaj-hack"
    })
})

app.get('/incoming-sms', (req, res)=> {
    console.log(req.query);
    res.sendStatus(200);
})

app.listen(8000, err => console.log(err || 'Listent on 8000'));