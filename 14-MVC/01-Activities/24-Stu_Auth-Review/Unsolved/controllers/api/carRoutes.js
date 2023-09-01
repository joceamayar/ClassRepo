const router = require('express').Router();
const{ Car}= require ('../../models');


router.get("/", async (req, res)=>{

let cars = await Car.findAll()

cars = cars.map(car=> Car.get({plain:true}));

res.json(cars);


})
router.post("/", async (req, res)=> {

    let cars = await Car.create(req.body)
    res.json(cars);
})

router.put("/", async (req, res) => {

   
})
router.delete("/", async (req, res)=> {

    let cars = await Car.create(req.body)
    res.json(cars);
})