const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let songs = [
    {id:1, title:"Love on the Brain", artist:"Rhianna", album:"ANTI", year:"2016"},
    {id:2, title:"Bohemian Rhapsody", artist:"Queen", album:"A Night at the Opera", year:"1975"},
    {id:3, title:"Ocean Eyes", artist:"Billie Eilish", album:"Ocean Eyes (single)", year:"2016"},
    {id:4 , title:"Toast" , artist:"Koffee" , album:"Rapture EP" , year:"2018" },
    {id:5 , title:"Broken Clocks" , artist:"SZA" , album:"Ctrl" , year:"2017" },
    {id:6 , title:"Love Thy Enemies" , artist:"Future" , album:"SAVE ME" , year:"2019" }
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/songs', (req,res)=>{
    res.send(songs);
});

app.get('/api/songs/:id',(req,res)=>{
    const song = songs.find(r => r.id === parseInt(req.params.id));

    if(!song) res.status(404).send("The song with the given id was not found");

    res.send(song);
});

app.post('/api/songs', (req,res)=>{
    const result = validateSong(req.body);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const song = {
        id:songs.length+1,
        title:req.body.title,
        artist:req.body.artist,
        album:req.body.album,
        year:req.body.year
    };

    songs.push(song);
    res.send(song);
});

app.put('/api/songs/:id',(req,res)=>{
    const song = songs.find(r=>r.id === parseInt(req.params.id));

    if(!song) res.status(404).send("song with given id was not found");

    const result = validateSong(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    song.title = req.body.title;
    song.artist = req.body.artist;
    song.album = req.body.album;
    song.year = req.body.year;
    res.send(song);
});

app.delete('/api/songs/:id',(req,res)=>{
    const song = songs.find(r=>r.id === parseInt(req.params.id));

    if(!song) res.status(404).send("song with given id was not found");

    const index = songs.indexOf(song);
    songs.splice(index,1);

    res.send(song);

});

function validateSong(song){
    const schema = {
        title:Joi.string().min(3).required(),
        artist:Joi.string().min(3).required(),
        album:Joi.string().min(3).required(),
        year:Joi.string().min(4).required()
    };

    return Joi.validate(song,schema);
}

app.listen(3000, ()=> {
    console.log("listening on port 3000");
});