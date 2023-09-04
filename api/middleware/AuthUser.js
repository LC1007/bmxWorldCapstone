const { sign, verify } = require('jsonwebtoken')

function createToken(user){
    return sign({
        userPass: user.userPass,
        emailAdd: user.emailAdd
    }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    })
}

function verifyUser(req, res, next){
    const token = req.cookies.legitUser

    if(token){
        verify(token, process.env.SECRET_KEY, (err, decodedToken) =>{
            if(err) throw err
            console.log(decodedToken);
            next()
        })
    } else{
        res.json('You need to login in.')
    }
}

module.exports = {
    createToken,
    verifyUser
}