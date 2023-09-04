const { sign, verify } = require('jsonwebtoken')

function createToken(user){
    return sign({
        userPass: user.userPass,
        emailAdd: user.emailAdd
    }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    })
}

// function verifyUser(req, res, next){
//     const token = req.cookies.legitUser

//     if(token){
//         verify(token, process.env.SECRET_KEY, (err, decodedToken) =>{
//             if(err) throw err
//             console.log(decodedToken);
//             next()
//         })
//     } else{
//         res.json('You need to login in.')
//     }
// }

function verifyUser(req, res, next){
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(' ')[1]
        
        
        if(!token){
            throw new Error('Token not provided')
        }

        verify(token, process.env.SECRET_KEY, (err, decodedToken) =>{
            if(err){
                throw new Error('Invalid token')
            }

            console.log(decodedToken);
            next()
        })

    } catch (error) {
        res.status(401).json({
            status: res.statusCode,
            msg: error.message
        })
    }
}

module.exports = {
    createToken,
    verifyUser
}