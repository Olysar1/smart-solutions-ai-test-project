import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUsers } from "../redux/users/usersActions";
import { toggleIsLoading } from "../redux/loading/loadingActions";
import UsersTable from "./UsersTableComponent";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import DeleteModalComponent from "./modals/DeleteModalComponent";
import EditModalComponent from "./modals/EditModalComponent";
import {
  toggleAlertDelete,
  toggleAlertEdited,
} from "../redux/alerts/alertsActions";

const UserListComponent = () => {
  const [error, setError] = useState(null);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const deleteModalIsVisible = useSelector(
    (state) => state.modals.deleteModalIsVisible
  );
  const editModalIsVisible = useSelector(
    (state) => state.modals.editModalIsVisible
  );
  const users = useSelector((state) => state.users.users); //get users from redux store
  const shouldAlertDelete = useSelector((state) => state.alerts.alertDeleted); // reads state to conditionally alert
  const shouldAlertEdit = useSelector((state) => state.alerts.alertEdited); // reads state to conditionally alert
  const dispatch = useDispatch();

  //handles alerts after closing each modal
  useEffect(() => {
    let deleteTimeoutId;
    let editTimeoutId;

    if (shouldAlertDelete.check) {
      deleteTimeoutId = setTimeout(() => {
        alert(`Successfully deleted user: ${shouldAlertDelete.targetName}`);
        dispatch(toggleAlertDelete());
      }, 150);
    }

    if (shouldAlertEdit.check) {
      editTimeoutId = setTimeout(() => {
        alert(`Successfully updated user: ${shouldAlertEdit.targetName}`);
        dispatch(toggleAlertEdited());
      }, 150);
    }

    return () => {
      // Clear the timeouts
      if (deleteTimeoutId) {
        clearTimeout(deleteTimeoutId);
      }
      if (editTimeoutId) {
        clearTimeout(editTimeoutId);
      }
    };
  }, [dispatch, shouldAlertDelete, shouldAlertEdit]);

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
      {deleteModalIsVisible && <DeleteModalComponent />}
      {editModalIsVisible && <EditModalComponent />}
    </div>
  );
};

export default UserListComponent;
