Structure :

users - > user, seller , admin

Users Collection:

Store information about registered users.

Latest Task :

- complete the bcrypt
- add cors
- every api must handle Errors
- we will setup new project for E-commerce with client and server
  (will copy paste required things)

> Plan your project journey wisely; a well-thought roadmap turns projects into reality and easy to manage for future devs

- First plan out schema on drawsql or (drawio) , folder structure ,

```
users
├── _id
├── username
├── email
├── password (hashed)
└── role (user, admin,seller)
|__ ...

```

Products Collection:

Store information about the products available for purchase.

```
products
├── _id
├── name
├── description
├── price
├── stock
├── imageUrl
|__ userId (seller)
```

Orders Collection:
Store information about customer orders.

```
orders
├── _id
├── userId
├── products (array of purchased products)
├── totalAmount
└── orderStatus
```

Carts Collection:
Store the shopping carts of users.

```
carts
├── _id
├── userId
├── products (array of products in the cart)
└── ...
```

<!-- Wishlist Collection: -->
