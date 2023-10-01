import "./UserDetailsComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleIsLoading } from "../../redux/loading/loadingActions";
import ErrorComponent from "../ErrorComponent";
import LoadingComponent from "../LoadingComponent";
import { saveSingleUser } from "../../redux/singleUser/singleUserActions";
import UserDetailsTable from "./UserDetailsTable";
import { useParams } from "react-router-dom";

const UserDetailsComponent = () => {
  const { userId } = useParams();
  const userBackup = useSelector((state) => state.singleUser.user);
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === +userId)
  );
  const [error, setError] = useState(null);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  //fetch data and store it in userBackup if the page is not rendered after clicking users name(page reloaded)
  useEffect(() => {
    if (!user) {
      setError(null);
      dispatch(toggleIsLoading());
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          if (!response.ok)
            throw new Error("Something went wrong while fetching user data");
          return response.json();
        })
        .then((result) => {
          dispatch(saveSingleUser(result));
          dispatch(toggleIsLoading());
        })
        .catch((err) => {
          setError(err);
          dispatch(toggleIsLoading());
        });
    }
  }, [userId, dispatch, user]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-10">
      {error && <ErrorComponent message={error.message} />}
      {isLoading && <LoadingComponent />}
      {(user || userBackup) && (
        <UserDetailsTable user={user ? user : userBackup} />
      )}
    </div>
  );
};

export default UserDetailsComponent;
