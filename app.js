const express = require("express");

const app = express();
const port = 4040;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    let quote = "choose you starter pokemon"
    res.render("home", {quote:quote})
});


app.get("/charmander/question1", (req,res) => {
let quote = "Who would you like to battle against";
const q1 = [
    {
        o: 'Vulpix'
    },
    {
        o: 'oddish'
    },
    {
        o: 'polliwag'
    }
];

    res.render("question1", {choices: q1, quote: quote});
});

app.get("/charmander/question1/question2", (req,res) => {
    let quote = "Who would you like to battle this time"
    const q2 = [
        {
            o: 'Bellsprout'
        },
        {
            o: 'Machop'
        },
        {
            o: 'Tentacool'
        }
    ];
    
        res.render("question2", {move: q2, quote: quote});
});

app.get("/charmander/question1/question2/q3", (req,res) => {
    let quote = "Last battle before the gym leader!!"
    const q3 = [
        {
            o: 'Diglett'
        },
        {
            o: 'Zubat'
        },
        {
            o: 'Caterpie'
        }
    ];
    
        res.render("q3", {choices: q3, quote: quote});
});

app.get("/:pokemon/gymp1", (req,res) => {
    let quote = "GYM LEADER BATTLE against Brock";
    let message = "Brock chooses Geodude"
    let msg = "what move will you choose? (you need to weakend it first)"
    const moves = [
        {
            o: 'Sratch'
        },
        {
            o: 'Ember'
        },
        {
            o: 'growl'
        }
    ];
    
        res.render("gymp1", {move: moves, quote: quote, message: message, msg:msg});
});

app.get("/:pokemon/gymp2", (req,res) => {
    let quote = "GYM LEADER BATTLE against Brock";
    let message = "That was effective, Geodude is almost out!"
    let msg = "what move will you choose?"
    const moves = [
        {
            o: 'Sratch'
        },
        {
            o: 'Ember'
        },
        {
            o: 'growl'
        }
    ];
    
        res.render("gymp2", {move: moves, quote: quote, message: message, msg:msg});
});

app.get("/:pokemon/gymf", (req,res) => {
    let quote = "GYM LEADER BATTLE against Brock";
    let message = "that moves wasn't effective, we need to weaken it first."
    let msg = "what move will you choose?"
    const moves = [
        {
            o: 'Sratch'
        },
        {
            o: 'Ember'
        },
        {
            o: 'growl'
        }
    ];
    
        res.render("gymf", {move: moves, quote: quote, message: message, msg:msg});
});

app.get("/:pokemon/win", (req,res) => {
    let quote = "Congrats you beat Brock"
    let message = "you now have the Boulder Badge, good luck on your future journey!"

     res.render("win", {quote: quote, message:message});
})

app.get("/:pokemon/levelup", (req,res) => {
    let quote = "You leveled up! Pleace choose a new move!"
    let message = "you are getting closer to versing a gym leader"

     res.render("levelup", {quote: quote, message:message});
})


app.get("/:pokemon/wrong", (req,res) => {
    let quote = "sorry you lost"
    let message = "your move wasn't effective!"
    res.render("wrong", {quote:quote, message:message})
})


app.listen(port, () => {
    console.log(`this server is listening on port ${port}`)
})