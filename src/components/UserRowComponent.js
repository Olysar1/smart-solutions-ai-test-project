import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showDeleteModal } from "../redux/modals/modalsActions";

const UserRow = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <tr key={user.id} className="transition duration-500 hover:bg-gray-800">
      <td
        className="py-2 cursor-pointer"
        onClick={() => navigate(`/${user.id}`)}
      >
        {user.name}
      </td>
      <td className="py-2">{user.email}</td>
      <td className="py-2">{user.address.city}</td>
      <td className="py-2">
        <button
          // onClick={() => dispatch(showEditModal())}
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mr-3"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(showDeleteModal(user))}
          className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
