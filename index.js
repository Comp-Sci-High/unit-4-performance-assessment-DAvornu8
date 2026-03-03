// 1) Use npm to install ejs in the terminal
//Completed

// 2) create a views and a public folder
//Completed


// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 
//Completed



// 4) Now in your views folder create your EJS file and add your HTML code from your planning document
// Completed


const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 
const songs = [
{
id: 1,
title: "Nights",
album: "Blonde",
releaseYear: 2016,
mood: "Reflective",
favoriteLyric: "Every night fucks every day up"
},
{
id: 2,
title: "Thinkin Bout You",
album: "Channel Orange",
releaseYear: 2012,
mood: "Heartfelt",
favoriteLyric: "Or do you not think so far ahead?"
},
{
id: 3,
title: "Pink + White",
album: "Blonde",
releaseYear: 2016,
mood: "Melancholic",
favoriteLyric: "You showed me love"
},
{
id: 4,
title: "Pyramids",
album: "Channel Orange",
releaseYear: 2012,
mood: "Epic",
favoriteLyric: "Working at the pyramid tonight"
},
{
id: 5,
title: "Self Control",
album: "Blonde",
releaseYear: 2016,
mood: "Vulnerable",
favoriteLyric: "I'll be the boyfriend in your wet dreams tonight"
}
];


// 6) Add static file middleware here
app.use(express.static(__dirname + "/public"))

// 7) Set the view engine to ejs here
app.set("view engine", "ejs")

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})


// 9) Create a route handler to your overview route from your planning document
// Pass in your data array

app.get("/songs", (req, res) => {
    res.render("overview", {songs})
});


// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})