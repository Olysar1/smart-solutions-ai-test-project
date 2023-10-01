import { useSelector } from "react-redux";
import UserRow from "./UserRow";

const UsersTable = () => {
  const users = useSelector((state) => state.users.users); //get users from redux store
  const usersPerPage = 5;

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.slice(0, usersPerPage).map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
