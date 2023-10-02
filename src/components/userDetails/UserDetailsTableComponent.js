import "./UserDetailsComponent.css";
import { Link } from "react-router-dom";

const UserDetailsTable = ({ user }) => {
  return (
    <>
      <div className="text-5xl font-bold mb-6">
        <span>{user.name.slice(0, -1)}</span>
        <span className="falling-letter-animation">{user.name.slice(-1)}</span>
      </div>
      <div className="text-xl mb-4">
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
        <p>
          Address: {user.address.street}, {user.address.suite}
        </p>
      </div>
      <Link
        to="/"
        className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Go Back
      </Link>
    </>
  );
};

export default UserDetailsTable;
