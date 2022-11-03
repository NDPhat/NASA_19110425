
const express=require('express')
const morgan = require('morgan');
const cors=require('cors')
const planetRouter=require('./routes/planets/planets.router')
const app=express()
app.use(express.json());
app.use(cors({
    origin : 'http://localhost:3000',
}));

pp.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('combined'));

app.use('/planets', planetRouter);
app.use('/launches', launchesRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
module.exports=app;
