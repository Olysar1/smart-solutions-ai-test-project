import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUsers } from "../redux/users/userActions";
import { toggleIsLoading } from "../redux/loading/loadingActions";
import UsersTable from "./UsersTable";

const UserListComponent = () => {
  const [error, setError] = useState(null);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  //get the data upon first render - dependency array must be "[]"
  useEffect(() => {
    dispatch(toggleIsLoading());
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "Something went wrong while fetching a list of the users"
          );
        return response.json();
      })
      .then((result) => {
        dispatch(saveUsers(result));
        dispatch(toggleIsLoading());
      })
      .catch((err) => {
        setError(err);
        dispatch(toggleIsLoading());
      });
  }, [dispatch]);

  return (
    <div className="container mx-auto bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Users Control Panel!
      </h2>
      {error && <h1>{error.message}</h1>}
      {isLoading ? <h1>Loading...</h1> : <UsersTable />}
    </div>
  );
};

export default UserListComponent;
