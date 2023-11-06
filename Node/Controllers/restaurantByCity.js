const Restaurants = require('../DataBase/restaurants')

exports.getRestaurantById =
    (req, res) => {
        const { askedId } = req.params;
        Restaurants.findById(askedId)
            .then(response => {
                res.status(200).json({
                    message: "Restaurants fetched successfully by Id",
                    restaurants: response
                })
            })
            .catch(err => {
                res.status(500).json({ Error: err })
            })

    }

exports.getRestaurantByCity = (req, res) => {
    const { askedCity } = req.params;
    Restaurants.find({ city: askedCity }, {})
        .then(response => {
            res.status(200).json({
                message: "Restaurants fetched successfully by City",
                restaurants: response
            })
        })
        .catch(err => {
            res.status(500).json({ Error: err })
        })

}