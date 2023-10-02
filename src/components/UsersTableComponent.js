import { useSelector } from "react-redux";
import UserRow from "./UserRowComponent";
import { useState } from "react";

const UsersTable = () => {
  const users = useSelector((state) => state.users.users); //get users from redux store
  const usersPerPage = 5;
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(usersPerPage);

  return (
    <>
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(from, to).map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div className="m-auto mt-7 flex justify-center">
        <button
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={from <= 0}
          onClick={() => {
            setFrom((prevState) => prevState - usersPerPage);
            setTo((prevState) => prevState - usersPerPage);
          }}
        >
          {"<<"}
        </button>
        <div className="bg-yellow-600 text-white font-bold py-2 px-10 rounded">
          {to / usersPerPage}
        </div>
        <button
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={to >= users.length}
          onClick={() => {
            setFrom((prevState) => prevState + usersPerPage);
            setTo((prevState) => prevState + usersPerPage);
          }}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};

export default UsersTable;
