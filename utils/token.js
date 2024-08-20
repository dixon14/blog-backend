const jwt = require('jsonwebtoken');

function generateToken(id){
    return jwt.sign({id}, process.env.JWT_KEY, {expiresIn: "1d"})
}


function getTokenFromHeader(req) {
    const headers = req.headers;
    const token = headers["authorization"].split(" ")[1];
    const isBearerToken =  headers["authorization"].toLowerCase().startsWith("bearer");

    if (token == undefined || !isBearerToken ) {
        return null
    }
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_KEY, (err, decoded)=> {
        if (err) {
            return false
        } else {
            return decoded 
        }
    })
}

module.exports = {
    generateToken,
    getTokenFromHeader,
    verifyToken
};