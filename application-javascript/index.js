const express = require('express');
const blockchainservice = require('./blockchainservice.js');
const asyncHandler = require('express-async-handler');


const app = express();
app.use(express.json());

  app.get('/getAllCustomers', asyncHandler(async (req, res, next)=>{
    
    let result=  await blockchainservice.getAllAsset();
    console.log(" inside index");
    console.log(result);
    res.send (result);
}));



app.get('/customers/:id', asyncHandler(async (req, res, next)=>{
    console.log(" inside index : req.params.id : " + req.params.id);
    let result=  await blockchainservice.readAsset(req.params.id);
     
    console.log(result); 
    res.send (result);
}));


app.post('/customers/add', asyncHandler(async (req, res, next)=>{
    
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const drivingLicence = req.body.drivingLicence;
    const citizenship = req.body.citizenship;
    console.log(" inside index : " +id + " " + name+ " " + address+" " + drivingLicence+" " + citizenship);
    let result=  await blockchainservice.createAsset(id,name,address,drivingLicence,citizenship);
    
    console.log(result); 
    res.send (result);
}));


app.post('/customers/update', asyncHandler(async (req, res, next)=>{
    
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const drivingLicence = req.body.drivingLicence;
    const citizenship = req.body.citizenship;
    console.log(" inside index : " +id + " " + name+ " " + address+" " + drivingLicence+" " + citizenship);
    let result=  await blockchainservice.updateAsset(id,name,address,drivingLicence,citizenship);
    
    console.log(result); 
    res.send (result);
}));




const port= process.env.Port || 3000
app.listen(port,() => console.log('listening on port $(port)'));
