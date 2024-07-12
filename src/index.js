const express = require("express");
const app = express();
const {PORT, Logger} = require("./config");
const routesRouter = require("./routes");
// const { CityServices } = require("./services");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, async (req,res)=>{
    // const city = await CityServices.getOneCity(3);
    // await city.createAirport({name:'Kempgowda International Airport', code:"KPG"});
    // await CityServices.destroyCity(1);
    console.log(`Server running successfully on port : ${PORT}`);
    Logger.info("Server started successfully");
});



app.use('/api',routesRouter);