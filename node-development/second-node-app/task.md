- installing postman
- what is postman , why do we need it ?
- let's make basic request api's

---

- Difference in module.exports , exports , export default
- Read -> https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get
- make a start command
-
- replace
  mongodb://localhost:27017 with mongodb://127.0.0.1:27017

---

- setup of mongo db
- fix the setup issues
- https://medium.com/@therkverma/set-mongodb-in-the-windows-path-environment-9d4c81477b32
  (set the path in environment variables)
- use mongod, mongo , and compass

---

### make a schema of differnt data types

const dataTypeSchema = new mongoose.Schema({
// String data type
name: { type: String, required: true },

// Number data type
age: { type: Number, min: 0, max: 18 }, // Let's assume ages are between 0 and 18

// Boolean data type
isStudent: { type: Boolean, default: true }, // Default value is true

// Array data type (of strings)
favoriteSubjects: { type: [String], default: [] }, // Default value is an empty array

// Date data type
birthDate: { type: Date, required: true },
});

<!-- please read this  -->

[Mongoose Populate method](https://mongoosejs.com/docs/populate.html#populate-virtuals)
