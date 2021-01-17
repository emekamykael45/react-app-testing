import React, { useState, useEffect } from "react";
import Account from "./Account";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <h1>Display Active Users Account Details</h1>
      {error && <p>{error.message}</p>}
      {!isLoading ? (
        users.map((user) => <Account key={user.username} user={user} />)
      ) : (
        <h3>Fetching Users...</h3>
      )}
    </React.Fragment>
  );
};

export default App;
