import React, { useEffect, useState } from "react";

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div>
      <h2>Data:</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
};

export default DataFetchingComponent;
