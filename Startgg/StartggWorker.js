import { getRecent } from "./Requests.js";

const StartggWorker =  (app) => {

    app.get("/getRecent", async (req, res) => {
        var timestamp = Math.floor(Date.now() / 1000)
        var data = await getRecent({perPage: 10, currentDate: timestamp});
        var tosend = data.data.tournaments.nodes
        res.json(tosend)
    })
}

export default StartggWorker;