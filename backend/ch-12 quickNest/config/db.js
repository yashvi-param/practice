import mongoose from 'mongoose';

async function connectDB() {
    try {
            const connect = await mongoose.connect(process.env.MONGO_URI);

            console.log("DB connected")
    } catch (error) {
     throw new Error(error.message);
    }   
}

export default connectDB;

// Middleware is a function that runs between receiving a request and sending a response in a web application.
// Why we use it:
// Modularity – Break request handling into reusable steps (logging, auth, validation, etc.)
// Cross-cutting concerns – Handle tasks that apply to many routes in one place (e.g., authentication checks, CORS headers)
// Pipeline processing – Each middleware can modify the request/response, end the request, or pass to the next middleware
// Code organization – Keeps route handlers clean and focused on business logic


// We use HttpError.js in middleware to send structured HTTP errors that can be caught and handled uniformly by an error-handling middleware.
// Why in middleware:
// Validation/auth failures – Middleware checks conditions (e.g., token valid, body present) and throws new HttpError(401, 'Unauthorized') instead of plain Error.
// Separation of concerns – Throwing a custom error in middleware keeps the error logic inside the request pipeline, not scattered in route handlers.
// Error propagation – The error middleware (defined last) catches HttpError and sends the correct status code + message to the client.