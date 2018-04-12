class MyError {
    constructor(statusCode,message){
        this.statusCode = statusCode;
        this.message = message;
    }
}
module.exports = MyError;