import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideEditModal } from "../../redux/modals/modalsActions";
import { updateUser } from "../../redux/users/usersActions";

const EditModalComponent = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCity, setNewCity] = useState("");
  const targetedUser = useSelector((state) => state.modals.targetedUser);
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  //closes modal window
  const closeModal = useCallback(() => {
    dispatch(hideEditModal());
  }, [dispatch]);

  //updates the targeted user
  const updateTargetedUser = useCallback(() => {
    const updatedUser = {
      ...targetedUser,
      name: newName,
      email: newEmail,
      address: { ...targetedUser.address, city: newCity },
    };
    dispatch(updateUser(updatedUser));
    closeModal();
  }, [newName, newEmail, newCity, targetedUser, closeModal, dispatch]);

  //handles closing modal when clicked outside the modal box
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch, closeModal]);

  return (
    <div className="backdrop-blur-sm fixed inset-0 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-gray-800 w-1/3 p-6 rounded-lg shadow-lg flex flex-col"
      >
        <div className="flex justify-between mb-4">
          <div className="text-gray-300 text-lg font-semibold">
            {`Edit ${targetedUser.name}'s Info`}
          </div>
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
        <div className="mb-4">
          <label className="text-gray-300 block mb-1">Name</label>
          <input
            type="text"
            placeholder={targetedUser.name}
            className="w-full bg-gray-700 text-white rounded py-2 px-3"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-300 block mb-1">Email</label>
          <input
            type="email"
            placeholder={targetedUser.email}
            className="w-full bg-gray-700 text-white rounded py-2 px-3"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="text-gray-300 block mb-1">City</label>
          <input
            type="text"
            placeholder={targetedUser.address.city}
            className="w-full bg-gray-700 text-white rounded py-2 px-3"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-auto">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={updateTargetedUser}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModalComponent;
