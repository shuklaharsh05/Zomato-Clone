const Restaurants = require('../DataBase/restaurants');

exports.getRestaurant = (req, res) => {
    Restaurants.find()
        .then(response => {
            res.status(200).json({
                message: "All Restaurants fetched successfully",
                restaurants: response
            })
        })
        .catch(err => {
            res.status(500).json({ Error: err })
        })

}

exports.filterRestaurant = (req, res) => {
    let { location, lcost, hcost, cuisine, mealtype, sort, page } = req.body;

    sort = sort ? sort : 1
    page = page ? page : 1

    const itemsPerPage = 2;
    let startIndex = page * itemsPerPage - itemsPerPage;
    let endIndex = page * itemsPerPage;

    let filterObj = {};

    location && (filterObj["city"] = location);      // City id to match with the location
    lcost && hcost && (filterObj["cost"] = { $gte: lcost, $lte: hcost });    // Comparing the cost of the restaurant
    cuisine && (filterObj["Cuisine.cuisine"] = { $in: cuisine });
    mealtype && (filterObj["type.name"] = mealtype);

    console.log(filterObj)

    Restaurants.find(filterObj).sort({ cost: sort })
        .then(response => {
            const filteredResponses = response.slice(startIndex, endIndex);
            res.status(200).json({
                message: "Filtered Restaurants fetched Successfully",
                restaurants: filteredResponses
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

}

