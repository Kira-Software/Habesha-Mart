class AppError extends Error{

    constructor(message,statusCode)     {
        super(message);  //set the message for comming parent class

        this.statusCode=statusCode;
        this.status=`${statusCode}`.startsWith('4') ? 'fail':'error';

        this.isOperational=true;  //for handling operational error

        Error.captureStackTrace(this,this.constructor)  //set place where error founds
    }


}
module.exports=AppError;