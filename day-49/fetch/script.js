async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();

    return user;
  } catch (error) {
    throw error;
  }
}

document.getElementById("fetchButton").addEventListener("click", async () => {
  try {
    const userData = await fetchUserData();

    const userDataDiv = document.getElementById("userData");
    userDataDiv.innerHTML = `
            <h2>User Data</h2>
            <p>Name: ${userData.name}</p>
            <p>Email: ${userData.email}</p>
            <p>City: ${userData.address.city}</p>
        `;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});
