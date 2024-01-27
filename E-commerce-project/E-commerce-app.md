Task Today :

- Make a register form (https://mui.com/material-ui/getting-started/templates/)
- add appopriate links
- add toast message (https://react-hot-toast.com/)
- get role , other user info like email from login api
- get the role of the user who is logged in (save role in local storage (secure localStorage))
- show the items in navbar on the based of roles and make those pages available to those users only

  Structure :

  For Buyer:

```md
Home: Navigate to the home page.
Shop: Explore and view available products.
Cart: View and manage items in the shopping cart.
Orders: Track and view order history.

<!-- Wishlist: Save and manage favorite items for later. -->

Profile: Access and edit personal information.
```

For Seller:

```md
Home: Navigate to the home page.
Products: Manage and add new products.
Orders: View and manage orders received.

<!-- Inventory: Track stock levels and manage product availability. -->

Profile: Access and edit seller information.
```

For Admin:

```md
Home: Navigate to the home page.
Products: View and manage all products.
Orders: Access and manage all orders.
Users: Manage and view user accounts.

<!-- Reports: Access sales and site analytics. -->
<!-- Settings: Configure site settings. -->

Profile: Access and edit admin information.
```

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

[{productId:schema.objectId , ref:"product" , quantity:Number}]
userId : joker
[
  {productId:123123,quantity : 3},
  {productId:4545,quantity : 2},
  {productId:23423,quantity : 2},
  {productId:945,quantity : 76},
  {productId:34234,quantity : 2},

 ]

product -> jeans (id-> 456 , quantity : 2)

  userId : joker
  items : []


newProduct =  {productId : 456 , quanity : 2}

items.push(newProduct)

cart.save()



└── ...
```

<!-- Wishlist Collection: -->
