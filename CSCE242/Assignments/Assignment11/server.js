const express = require("express");
const app= express();
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/Assignment11', (req,res)=>{
    consoles = [];
    consoles[0]={
        name:"Xbox",
        image:"images/xbox.jpg",
        manufacturer:"Microsoft",
        currentModel:"Xbox One X (late 2020)",
        pastModels: "Xbox, Xbox 360, Xbox One, Xbox One X",
        MSRP:"$499",
        exclusiveGames:"yes",
        rating: "5/5 stars"
    }
    consoles[1]={
        name:"PlayStation",
        image:"images/playstation.jpg",
        manufacturer:"Sony",
        currentModel:"PlayStation 4",
        pastModels:"PlayStation, PlayStation 2, PlayStation 3, PlayStation 4, PlayStation 5(coming soon)",
        MSRP:"$299",
        exclusiveGames:"yes",
        rating: "4.5/5 stars"
    }
    consoles[2]={
        name:"PC",
        image:"images/pc.jpg",
        manufacturer:"varies",
        currentModel:"N/A",
        pastModels:"N/A",
        MSRP:"$700-$1000",
        exclusiveGames:"no",
        rating: "5/5 stars"
    }
    consoles[3]={
        name:"Wii",
        image:"images/wii.jpg",
        manufacturer:"Nintendo",
        currentModel:"Wii",
        pastModels:"Wii, RVL-101, Wii Mini (RVL-201)",
        MSRP:"$99",
        exclusiveGames:"yes",
        rating: "3.5/5 stars"
    }
    consoles[4]={
        name:"Nintendo Switch",
        image:"images/nintendoSwitch.jpg",
        manufacturer:"Nintendo",
        currentModel:"Nintendo Switch/Lite",
        pastModels:"Nintendo Switch, Nintendo Switch Lite",
        MSRP:"$299",
        exclusiveGames:"yes",
        rating: "4/5 stars"
    }
    consoles[5]={
        name:"Nintendo DS",
        image:"images/DS.jpg",
        manufacturer:"Nintendo",
        currentModel:"Nintendo DSi XL",
        pastModels:"Nintendo DS, Nintendo DS Lite, Nintendo DSi, Nintendo DSi XL",
        MSRP:"$169",
        exclusiveGames:"yes",
        rating: "4.5"
    }

    res.json(consoles);
});

app.listen(3000, ()=>{
    console.log("listening on port 3000");
});