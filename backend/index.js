const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Team = require('./models/Team');
const Match = require('./models/Match');
const Tournament = require('./models/Tournament');
const PORT = 3000 || process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log("error in connecting to db", err);
})

const createMatch = async (data) => {
    const tournament = data.tournament;
    const year = data.year;
    const date = data.date;
    const venue = data.venue;
    const round = data.round;
    const team1 = data.team1;
    const team2 = data.team2;
    const completed = data.completed;
    const team1_score = data.team1_score;
    const team2_score = data.team2_score;
    const team1_wickets = data.team1_wickets;
    const team2_wickets = data.team2_wickets;
    const team1_overs = data.team1_overs;
    const team2_overs = data.team2_overs;
    const team1_extras = data.team1_extras;
    const team2_extras = data.team2_extras;
    const winner = data.winner;
    const doc = await Tournament.findById(tournament);
    if (!doc) {
        return res.status(400).send("tournament not found");
    }
    const createdMatch = await Match.create({
        tournament,
        year,
        date,
        venue,
        round,
        team1,
        team2,
        completed,
        team1_score,
        team2_score,
        team1_wickets,
        team2_wickets,
        team1_overs,
        team2_overs,
        team1_extras,
        team2_extras,
        winner
    })
    const savedMatch = await createdMatch.save();
    await Tournament.findByIdAndUpdate(tournament, { $push: { matches: savedMatch._id } });
    return savedMatch
}

app.get('/', (req, res) => {
    res.status(200).send("hello world")
})

app.post('/register', async (req, res) => {
    const players = req.body.players;
    const name = req.body.name;
    const tournament = req.body.tournament;
    const city = req.body.city;
    const email = req.body.email;
    const phone = req.body.phone;
    const extra_players = req.body.extra_players;
    const doc = await Tournament.findById(tournament);
    if (!doc) {
        return res.status(400).send("tournament not found");
    }
    if (doc.spotsLeft === 0) {
        return res.status(400).send("no spots left");
    }
    const createdTeam = await Team.create({
        players,
        name,
        tournament,
        city,
        email,
        phone,
        extra_players
    })
    const savedTeam = await createdTeam.save();
    await Tournament.findByIdAndUpdate(tournament, { $push: { teams: savedTeam._id }, $inc: { spotsLeft: -1 } });
    return res.status(201).send(savedTeam);
})

app.post('/schedule', async (req, res) => {
    const id = req.body.tournament_id;
    const doc = await Tournament.findById(id)
        .populate({
            path: 'matches',
            populate: [
                { path: 'team1' },
                { path: 'team2' }
            ]
        })
        .exec();

    if (!doc) {
        return res.status(400).send("tournament not found");
    }
    const matches = doc;
    return res.status(200).send(matches);
})

app.post('/createTournament', async (req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    const city = req.body.city;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const capacity = req.body.capacity;
    const spotsLeft = req.body.capacity;
    const createdTournament = await Tournament.create({
        name,
        year,
        city,
        startDate,
        endDate,
        capacity,
        spotsLeft
    })
    const savedTournament = await createdTournament.save();
    return res.status(201).send(savedTournament);
})

app.post('/createMatch', async (req, res) => {

    const savedMatch = await createMatch(req.body);
    return res.status(201).send(savedMatch);
});

app.post('/createMatches', async (req, res) => {
    const data = req.body;
    for (let i = 0; i < data.length; i++) {
        await createMatch(data[i]);
    }
    res.status(201).send("matches created");
})

app.get('/tournaments', async (req, res) => {
    const tournaments = await Tournament.find().populate({
        path: 'matches',
        populate: [
            { path: 'team1' },
            { path: 'team2' }
        ]
    });
    return res.status(200).send(tournaments);
})

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
})