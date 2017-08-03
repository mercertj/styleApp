const db = require("../models");

module.exports = app => {

    app.get("/api/stylist", (req, res) => {
        db.Stylist.findAll({
            include: [{model: db.Review, include: [db.Client]}]
        }).then(result => res.json(result)).catch(err => console.log(err));
    })

    app.get("/api/stylist/:id", (req, res) => {
        db.Stylist.findOne({
            include: [{model: db.Review, include: [db.Client]}],
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result)).catch(err => console.log(err));
    })

    app.post("/api/stylist", (req, res) => {
        db.Stylist.create(req.body).then(result => res.json(result)).catch(err => console.log(err));
    })

    app.put("/api/stylist", (req, res) => {
        db.Stylist.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(result => res.json(result)).catch(err => console.log(err));
    })

    app.delete("/api/sylist/:id", (req, res) => {
        db.Stylist.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result)).catch(err => console.log(err));
    });
}