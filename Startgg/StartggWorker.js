import { getRecent, getTournament, searchTournament } from "./Requests.js";

const StartggWorker =  (app) => {

    app.get("/getRecent", async (req, res) => {
        var timestamp = Math.floor(Date.now() / 1000)
        var data = await getRecent({perPage: 10, currentDate: timestamp});
        var tosend = data.data.tournaments.nodes
        res.json(tosend)
    })

    app.get("/getEvent/:id", async (req, res) => {
        const {id} = req.params;
        var data = await getTournament({id: id})
        var tosend = data.data.tournaments.nodes
        res.json(tosend)
    })

    app.get("/searchEvent/:name/:before/:after", async (req, res) => {
        const {name, before, after} = req.params;
        const beforeInt = parseInt(before)
        const afterInt = parseInt(after)
        var data = await searchTournament({perPage: 10, name: name, before: beforeInt, after: afterInt})
        var tosend = data.data.tournaments.nodes
        res.json(tosend)
    })
}

export default StartggWorker;