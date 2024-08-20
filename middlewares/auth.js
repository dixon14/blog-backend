const { getTokenFromHeader, verifyToken } = require("../utils/token")

const authHandler = (req, res, next) => {
    //  get token from header
    const token = getTokenFromHeader(req);
    if (!token) {
        return res.status(401).json({
            message: "Token required in request header"
        })
    }
    
    // verify token
    const decoded = verifyToken(token)
    if (!decoded) {
        return res.status(401).json({
            message: "Invalid/Expired token, please login again "
        })
    }
    
    // save user into req object
    req.userAuth = decoded.id
    next();
}


module.exports = {
    authHandler
}