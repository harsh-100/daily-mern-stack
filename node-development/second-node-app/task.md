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

---

Let's practice

- o Match
  o Group
  o Sort
  o lookup
  - project

```
app.get('/users-average-age', async (req, res) => {
  try {
    const result = await UserModel.aggregate([
      {
        $group: {
          _id: '$_id',
          user: { $first: '$$ROOT' },
          averageAge: { $avg: '$age' }
        }
      },
      {
        $project: {
          _id: 0,
          user: 1,
          averageAge: 1
        }
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

```

```
app.get('/blogs-count-per-genre', async (req, res) => {
  try {
    const result = await BlogsModel.aggregate([
      {
        $group: {
          _id: '$genre',
          blogCount: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          genre: '$_id',
          blogCount: 1
        }
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

```

```
app.get('/users-with-blogs-count', async (req, res) => {
  try {
    const result = await BlogsModel.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'userDetails'
        }
      },
      {
        $group: {
          _id: '$userId',
          user: { $first: '$userDetails' }, // Assuming a user has the same details across blogs
          blogCount: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          user: 1,
          blogCount: 1
        }
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

```

```js
//solve 1
let blogData = await BlogsModel.find();

let newData = [];

for (const eachObj of blogData) {
  let data = await UserModel.findById(eachObj.userId).lean();

  // Create a new object with the original data and additional userData
  newData.push({
    ...eachObj.toObject(), // Convert eachObj to a plain JavaScript object
    userData: data,
  });
}

res.send(newData);

// solve 2
let blogData = await BlogsModel.find();

let newData = await Promise.all(
  blogData.map(async (eachObj) => {
    let data = await UserModel.findById(eachObj.userId).lean();

    // Create a new object with the original data and additional userData
    return {
      ...eachObj.toObject(), // Convert eachObj to a plain JavaScript object
      userData: data,
    };
  })
);

res.send(newData);

// solve 3
// or we can use the new array in map also and just push it
```

<!-- Api in blog  -->

- update a blog with id
- delete a blog with id
- add a blog
- get all blogs
- get blog by id (with blog id)
- get blog with userID (with userId)

<!-- what to do  -->

- generate token with jwt
- verify token for dashboard route

- make folder for middleware

task :

- make route for admin only can access data using the token (must)
- secure password using bcrypt (optional )

---
