class HttpError extends Error { // Declares a custom error class that inherits from the built-in Error class.
    constructor(statusCode, message) { // Constructor accepting a numeric status code and a string message.
        super(message); //Calls the parent Error constructor with the message, setting the error message.
        this.statusCode = statusCode; //Assigns the status code to an instance property.
    } //Closes the constructor.
} // Closes the class.

export default HttpError; //Exports the class as the default module export.