const Locations = require('../DataBase/locations');

exports.getLocations = (req, res) => {
    Locations.find()
        .then(response => {
            res.status(200).json({
                message: "Locations fetched successfully",
                locations: response
            })
        })
        .catch(err => {
            res.status(500).json({ Error: err })
        })
}