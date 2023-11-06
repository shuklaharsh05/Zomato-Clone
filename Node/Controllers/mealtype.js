const Mealtypes = require('../DataBase/mealType');

exports.getMealtype = (req, res) => {
    Mealtypes.find({},{})
        .then(response => {
            res.status(200).json({ 
                message: "Meals found", 
                mealtype: response });
        })
        .catch(err => {
            res.status(500).json({ Error: err})
        })
    
}