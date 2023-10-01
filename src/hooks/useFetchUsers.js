//potential replacement of two separate API calls for DRY principle(in "UserListComponent" and "UserDetailsComponent")

import { useEffect, useState } from "react";

const useFetchUsers = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "Something went wrong while fetching a list of the users"
          );
        return response.json();
      })
      .then((result) => {
        // dispatch(saveUsers(result));
        // dispatch(toggleIsLoading());
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
        dispatch(toggleIsLoading());
      });
  }, []);

  return { data, error };
};

export default useFetchUsers;
