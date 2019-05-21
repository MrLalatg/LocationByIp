const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());

app.get('/position/:ip', async (req, res) => {
    let geoData;

    if(req.params.ip !== "current"){
        geoData =  await axios.get(`https://freegeoip.app/json/${req.params.ip}`);
    } else {
        geoData = await axios.get(`https://freegeoip.app/json/${req.ip}`);
    }

    res.send(geoData.data);
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});