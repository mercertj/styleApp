const db = require("../models");

module.exports = app => {

    app.get("/api/client", (req, res) => {
        db.Client.findAll({
            include: [{model: db.Feedback, include: [db.Stylist]}]
        }).then(result => res.json(result)).catch(err => console.log(err));
    })

    app.get("/api/client/:id", (req, res) => {
        db.Client.findOne({
            include: [{model: db.Feedback, include: [db.Stylist]}],
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result)).catch(err => console.log(err));
    })

    app.post("/api/client", (req, res) => {
        db.Client.create(req.body).then(result => res.json(result)).catch(err => console.log(err));
    })

    app.put("/api/client", (req, res) => {
        db.Client.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(result => res.json(result)).catch(err => console.log(err));
    })

    app.delete("/api/client/:id", (req, res) => {
        db.Client.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result)).catch(err => console.log(err));
    });
}