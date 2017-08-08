const db = require("../models");
const router = require('express').Router();

router.get("/", (req, res) => {
    db.Client.findAll({
        include: [{model: db.Feedback, include: [db.Stylist]}]
    }).then(result => res.json(result)).catch(err => console.log(err));
})

router.post("/", (req, res) => {
    db.Client.create(req.body).then(result => res.json(result)).catch(err => console.log(err));
})

router.put("/", (req, res) => {
    db.Client.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(result => res.json(result)).catch(err => console.log(err));
})

router.get("/:id", (req, res) => {
    db.Client.findOne({
        include: [{model: db.Feedback, include: [db.Stylist]}],
        where: {
            id: req.params.id
        }
    }).then(result => res.json(result)).catch(err => console.log(err));
})

router.delete("/:id", (req, res) => {
    db.Client.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => res.json(result)).catch(err => console.log(err));
});

module.exports = router;