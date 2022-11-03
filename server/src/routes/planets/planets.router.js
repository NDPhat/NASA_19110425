const expres=require('express');
const {getAllPlanets}=require('./planets.controller')
const planetRouter=expres.Router();

planetRouter.get('/planets',getAllPlanets);

module.exports=planetRouter;