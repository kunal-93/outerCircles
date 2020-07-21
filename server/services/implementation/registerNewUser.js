const userModel = require("../../models/user");

const registerNewUser = (req, res) => {
    const user = req.body
    const newUserInfo = {
        FirstName : user.firstName,
        LastName : user.lastName,
        Email : user.email,
        Password: user.password,
    }

    const newUser = new userModel(newUserInfo);
    
    newUser.save()
    .then(()=>{
        res.send("Registration successfull");
    })
    .catch(err => {
        res.statusMessage = "Account already exists";
        res.status(400);
        res.send(err);
    }) 
}

module.exports = registerNewUser;