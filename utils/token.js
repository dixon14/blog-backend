const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(id){
    return jwt.sign({id}, process.env.JWT_KEY, {expiresIn: "1d"})
}


function getTokenFromHeader(req) {
    const authHeaders = req.headers["authorization"];
    if (authHeaders == undefined ) {
        return null
    }

    const isBearerToken =  authHeaders.toLowerCase().startsWith("bearer");
    if (!isBearerToken) {
        return null
    }

    return authHeaders.split(" ")[1];
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