const UserRow = ({ user }) => {
  return (
    <tr key={user.id}>
      <td className="py-2">{user.name}</td>
      <td className="py-2">{user.email}</td>
      <td className="py-2">{user.address.city}</td>
      <td className="py-2">
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mr-3">
          Edit
        </button>
        <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
