const db = require("../models");
const router = require('express').Router();
const getCoordinates = require('../geo/geoUserLatLong.js');

router.get("/", (req, res) => {
    db.Stylist.findAll({
        include: [{model: db.Review, include: [db.Client]}]
    }).then(result => res.json(result)).catch(err => console.log(err));
})

router.post("/", (req, res) => {
    //  we pass 'true' to parse the address to Google Maps
    getCoordinates.fromStylist(req.body, newStylist => { 
        db.Stylist.create(newStylist).then(result => res.json(result)).catch(err => console.log(err));
    })
    
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

router.get("/search/:service/:address", (req, res) => {
    console.log('backend get')
    const service = req.params.service.replace(/[ +-]/g,'_');
    db.Stylist.findAll({
        include: [{model: db.Review, include: [db.Client]}],
        where: {
            [service]: true
        }
    }).then(result => {
        console.log('getCoordinates')
        getCoordinates.fromAddress(req.params.address, searchLatLong => { 
            let stylistsInRange = result.filter(stylistObj => {
                return getCoordinates.inRange( 
                                searchLatLong, 
                            {
                                lat:  stylistObj.address_lat,
                                lng: stylistObj.address_long
                            },
                                stylistObj.travel_range
                            )
            });
            console.log('stylistsInRange = *************************', stylistsInRange)
            res.json(stylistsInRange)
        })
    }).catch(err => console.log(err));
})

module.exports = router;
