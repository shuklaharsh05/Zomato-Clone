const User = require('../DataBase/user')
// Login part
exports.Login = (req, res) => {
    const{ email , password } = req.body;

    User.find({
        email,
        password
    })

    .then(response =>{
        if (response.length > 0){
            res.status(200).json({
                message: "User details are validated",
                isAuthenticated: true,
                details: response
            })
        }
        else{
            res.status(200).json({
                message: "User details are not validated",
                isAuthenticated: false,
                details: response
            })
        }
    })
    .catch(err =>{
            res.status(500).json({ Error: err})
        })
}
// Registration Part
exports.Signup = (req, res) => {
    const{ email , password , name} = req.body;

    const userObj = new User({
        email,
        password,
        name
    });

    userObj.save()
        .then(response =>{
            res.status(200).json({
                message: "User done",
                details: response
            })
        })
        .catch(err =>{
            res.status(500).json({ Error: err})
        })
}