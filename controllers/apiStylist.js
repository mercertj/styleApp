const db = require("../models");
const router = require('express').Router();

router.get("/", (req, res) => {
    db.Stylist.findAll({
        include: [{model: db.Review, include: [db.Client]}]
    }).then(result => res.json(result)).catch(err => console.log(err));
})

router.post("/", (req, res) => {
    db.Stylist.create(req.body).then(result => res.json(result)).catch(err => console.log(err));
})

router.put("/", (req, res) => {
    db.Stylist.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(result => res.json(result)).catch(err => console.log(err));
})

router.get("/:id", (req, res) => {
    db.Stylist.findOne({
        include: [{model: db.Review, include: [db.Client]}],
        where: {
            id: req.params.id
        }
    }).then(result => res.json(result)).catch(err => console.log(err));
})

router.delete("/:id", (req, res) => {
    db.Stylist.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => res.json(result)).catch(err => console.log(err));
});

router.get("/search/:service", (req, res) => {
    const service = req.params.service.replace(/[ +-]/g,'_');
    db.Stylist.findAll({
        include: [{model: db.Review, include: [db.Client]}],
        where: {
            [service]: true
        }
    }).then(result => res.json(result)).catch(err => console.log(err));
})


module.exports = router;