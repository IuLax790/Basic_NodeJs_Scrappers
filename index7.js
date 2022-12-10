const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const port = process.env.PORT || 1200;
const url = "https://en.wikipedia.org/wiki/U.S._state";
let states = [];
const fetchData =  async ()=>{
    try{
      let res = await axios.get(url);
      let $ = await cheerio.load(res.data);
      $(
        '#mw-content-text > div.mw-parser-output > div:nth-child(20)'
       ).each((i,err)=>{
        states.push($(err).text().trim());
      });
    }catch(err){
     console.log(err)
    }
};
fetchData();

app.get("/states",(req,res)=>{
  res.send(states);
});

app.listen(port,()=>console.log('Server running'));

