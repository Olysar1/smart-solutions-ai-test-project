import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUsers } from "../redux/users/usersActions";
import { toggleIsLoading } from "../redux/loading/loadingActions";
import UsersTable from "./UsersTable";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

const UserListComponent = () => {
  const [error, setError] = useState(null);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const users = useSelector((state) => state.users.users); //get users from redux store
  const dispatch = useDispatch();

  //get the users list only if store does not have it already
  useEffect(() => {
    if (users.length === 0) {
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
    }
  }, [dispatch, users]);

  return (
    <div className="container mx-auto bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Users Control Panel!
      </h2>
      {error && <ErrorComponent message={error.message} />}
      {isLoading ? <LoadingComponent /> : <UsersTable />}
    </div>
  );
};

export default UserListComponent;
