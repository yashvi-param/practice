import mongoose from "mongoose";//mongoose: ODM for MongoDB – lets you define schemas and interact with the database.
import bcrypt from "bcryptjs";//bcryptjs: Library for hashing passwords.

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,  //name: String type.
      trim: true, //trim: true: Removes whitespace from both ends.
      required: true, //required: true: Must be provided.
    },
    email: { 
      type: String,
      required: true,
      unique: true,
    }, //String, required, must be unique across all users.
    password: {
      type: String,
      required: true,
    }, //String, required. Stored as hashed value after pre-save hook.
    phone: {
      type: Number,
      required: true,
    }, //phone: Number, required.
    role: {
      type: String,
      enum: ["customer", "provider", "admin", "super_admin"],
      default: "customer",
    }, //role: String, must be one of the four specified roles. Defaults to "customer".
  },

  {
    timestamps: true,
  }, //timestamps: true: Automatically adds createdAt and updatedAt fields.
);

userSchema.pre("save", async function () { //Runs before every save() call.
  const user = this; //this refers to the user document being saved.
  if (user.isModified("password")) { //Only re-hashes password if it was modified (to avoid double-hashing on updates).
    user.password = await bcrypt.hash(user.password, 8); //bcrypt.hash(password, saltRounds) – hashes password using 8 salt rounds.
  }
});

userSchema.statics.findByCredentials = async function (email, password) { //Adds a static method to the User model (called on the model itself, not an instance).
  try {
    const user = await this.findOne({ email }); //this is the User model. Finds a user by email.
    if (!user) { 
      throw new Error("unable to login");
    } //If no user found, throw error.
    const isMatched = await bcrypt.compare(password, user.password); 
    if (!isMatched) {
      throw new Error("unable to login");
    } //Compares plain-text password with stored hash. If mismatch, throw error.
    return user;
  } catch (error) {
    console.log(error);
  }
};//Returns the user if credentials are valid.
// Catches errors, logs them, and implicitly returns undefined (which can cause issues – usually you'd re-throw or return null).

const User = mongoose.model("User", userSchema); //Compiles the schema into a User model (maps to users collection in MongoDB).

export default User; //Exports the model for use in controllers or other files.

// We use models (like User.js) to define the structure and behavior of data in your application.
// Why models exist:
// Data schema – Describes what fields a user has (name, email, password, role, phone) and their types/validation rules.

// Database interaction – Provides methods like save(), find(), findByCredentials() that hide raw database queries.

// Business logic encapsulation – Logic for password hashing, email validation, or authentication lives in the model, not scattered in controllers.

// Consistency – Every user document follows the same structure, preventing invalid data.