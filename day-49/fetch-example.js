// The fetch() method in JavaScript is used to request data from a server.
// The request can be of any type of API that returns
// the data in JSON or XML. The fetch() method requires one parameter,
//  the URL to request, and returns a promise.
async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response;
    console.log("🚀 ~ file: fetch-example.js:11 ~ fetchUserData ~ user:", user);

    return user;
  } catch (error) {
    throw error;
  }
}

fetchUserData();

/**
 * Let's break down why you need to use await in both cases:

await fetch(...):

The first await is used to wait for the fetch function to complete its network request. The fetch function returns a promise, which resolves to a Response object.
response will hold the Response object once the promise returned by fetch is resolved. This object contains information about the HTTP response (headers, status, etc.).
await response.json():

The second await is used to wait for the json() method to complete. json() is an asynchronous method that reads the response body and parses it as JSON.
This method also returns a promise that resolves to the actual JSON data.
user will hold the parsed JSON data once the promise returned by response.json() is resolved.
So, by using await on both fetch and response.json(), you ensure that you're waiting for each asynchronous operation to complete before moving on to the next step. This is important because network requests and JSON parsing are asynchronous operations, and you want to ensure that you have the necessary data (in this case, the user data) before proceeding with any further operations.

In summary, you need the second await to wait for the JSON parsing operation to complete and get the actual user data from the response.






 */
