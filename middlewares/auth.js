const { AppErr } = require("../utils/error");
const { getTokenFromHeader, verifyToken } = require("../utils/token")

const authHandler = (req, res, next) => {
    try {
    //  get token from header
    const token = getTokenFromHeader(req);
    if (!token) {
        throw new AppErr(401, "Token required in request header")
    }
    
    // verify token
    const decoded = verifyToken(token)
    if (!decoded) {
        throw new AppErr(401, "Invalid/Expired token, please login again")
    }
    
    // save user into req object
    req.userAuth = decoded.id
    next()
    } catch (error) {
        next(error);
    }
}


module.exports = {
    authHandler
}