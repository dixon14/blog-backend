// Error class
class AppErr extends Error {
    constructor(statusCode, message) {
        super(message); // Call Error constructor method with their own message
        this.statusCode = statusCode;
        this.status = 'failed';
    }

}
module.exports = {
    AppErr
};