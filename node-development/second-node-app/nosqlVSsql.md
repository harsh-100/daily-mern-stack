NoSQL databases solve certain challenges that arise in traditional SQL (relational) databases. Let's explore a common problem and how NoSQL addresses it, with examples for both SQL and NoSQL.

Problem: Scalability and Schema Flexibility
Example in SQL (Relational Database):

Consider a blogging platform using a SQL database. You have a table for Users and a table for BlogPosts. Each blog post is linked to a user through a foreign key relationship.

```sql
-- Users Table
CREATE TABLE Users (
UserID INT PRIMARY KEY,
UserName VARCHAR(50) NOT NULL
);

-- BlogPosts Table
CREATE TABLE BlogPosts (
PostID INT PRIMARY KEY,
UserID INT FOREIGN KEY REFERENCES Users(UserID),
Title VARCHAR(100) NOT NULL,
Content TEXT NOT NULL
);
```

Now, imagine the blogging platform becomes immensely popular, and you need to scale to handle a massive amount of data. Additionally, you want to introduce a feature where users can have custom fields for their profiles.

Adding these changes in a traditional SQL database might be challenging. You may need to modify existing tables, create new tables, and handle migrations, which can be complex.

NoSQL Solution:

In a NoSQL database, such as a document-oriented database like MongoDB, you could store user data and blog posts in a more flexible and scalable way. Each blog post can be a document with a dynamic structure, and users can have additional fields without modifying a rigid schema.

// Example document in a NoSQL (MongoDB) collection

```json
{
"_id": ObjectId("..."),
"title": "Sample Blog Post",
"content": "This is the content of the blog post.",
"user": {
"userID": 123,
"username": "john_doe",
"customFields": {
"field1": "value1",
"field2": "value2"
}
}
}
```

In this example, the NoSQL database allows for more flexibility in the data structure. Each blog post can have different fields, and users can have custom data without a predefined schema. This flexibility makes it easier to scale and adapt to changing requirements.

Summary:
The problem of scalability and schema flexibility is addressed by NoSQL databases, allowing developers to store and retrieve data in a more dynamic and scalable way compared to the rigid structure of traditional SQL databases. The choice between SQL and NoSQL depends on the specific needs and characteristics of the application. NoSQL databases shine in scenarios where flexibility and scalability are crucial, while SQL databases excel in cases where a structured, relational model is essential.
