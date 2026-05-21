 import HttpError from "../middleware/HttpError.js"; 
 import User from "../model/User.js"

const add = async (req, res, next) => {
  try {
    const { name, email, password, role, phone } = req.body;

    const newUser = {
      name,
      email, 
      password,
      role,
      phone,
    };

    const user = new User (newUser);

    await user.save();

    res.status(201).json({ success:true, user});
  } catch(error){
    next (new HttpError(error.message, 500));
  }
};


const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await user.findByCredentials(email, password);

    if(!user){
      return next(new HttpError("unable to login"));
    }

    res.status(200).json({success:true, user});
  }catch(error){
    next(new HttpError(error.message, 500));
  }
};
export default { add, login };

// We use userController.js to separate route logic from request handling logic.
// Why it exists:
// Separation of concerns – Routes define endpoints (URLs, methods), controllers handle the actual request/response logic (validating input, calling database, sending response).

// Reusability – Same controller function can be used by multiple routes or tested independently without HTTP dependencies.

// Maintainability – Changes to business logic happen in one place (controller), not scattered across route definitions.

// Testability – Controllers can be unit tested by mocking request/response objects.

// Clean routing file – Routes file stays thin and readable:
