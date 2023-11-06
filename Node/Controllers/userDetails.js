const UserDetails = require('../DataBase/userDetails');

exports.UserDetails = (req, res) => {
    const {name, number, address} = req.body;

    const userDetailsObj = new UserDetails({
        name,
        number,
        address
    })

    userDetailsObj.save()
        .then(response =>{
            res.status(200).json({
                message: "User Details successfully fetched",
                details: response
            })
        })
        .catch(err => {
            res.status(500).json({ Error: err})
        })

}