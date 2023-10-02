import { useDispatch, useSelector } from "react-redux";
import { hideDeleteModal } from "../../redux/modals/modalsActions";
import { useCallback, useEffect, useRef } from "react";
import { deleteUser } from "../../redux/users/usersActions";

const DeleteModalComponent = () => {
  const targetedUser = useSelector((state) => state.modals.targetedUser);
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  //closes modal window
  const closeModal = useCallback(() => {
    dispatch(hideDeleteModal());
  }, [dispatch]);

  //deletes targeted user
  const deleteTargetedUser = useCallback(() => {
    dispatch(deleteUser(targetedUser));
    closeModal();
  }, [targetedUser, closeModal, dispatch]);

  //handles closing modal when clicked outside the modal box
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // cleanup event handler
    };
  }, [dispatch, closeModal]);

  return (
    <div className="backdrop-blur-sm fixed inset-0 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-gray-800 w-1/3 p-6 rounded-lg shadow-lg flex flex-col"
      >
        <div className="flex justify-between mb-4">
          <div className="flex flex-grow justify-end">
            <button
              className="text-gray-500 hover:text-gray-300"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-gray-300 text-lg font-semibold">
            {`Are you sure you want to delete user: ${targetedUser.name}?`}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={deleteTargetedUser}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalComponent;
