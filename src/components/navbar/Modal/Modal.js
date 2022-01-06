import React, { useState } from "react";
import "./Modal.css";
import safeIcon from "../../../images/safe-icon.png";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({
  handleClose,
  show,
  editId,
  edit,
  safeName,
  setSafeName,
  safeOwner,
  setSafeOwner,
  safeType,
  setSafeType,
  safeDesc,
  setSafeDesc,
  setSelect,
  setShowName,
  setShowDesc
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const buttonEnabled = safeName=="" || safeOwner=="" || safeType=="" || safeDesc.length < 10 ? "btn-disabled" : "btn-enabled";


  const dispatch = useDispatch();
  const safesList = useSelector((safesList) => safesList);

  const handleAddData = () => {
    console.log(safeName, safeOwner, safeType, safeDesc);
    setSelect(true);
    setShowName(safeName);
    setShowDesc(safeDesc)
    const payload = {
      safeName,
      safeOwner,
      safeType,
      safeDesc,
    };
    dispatch({ type: "ADD_SAFE", payload });
    handleClose();
    setSafeName("");
    setSafeOwner("");
    setSafeType("Personal");
    setSafeDesc("");
  };

  const handleEditData = (id) => {
    console.log(safeName, safeOwner, safeType, safeDesc);
    const payload = {
      id,
      safeName,
      safeOwner,
      safeType,
      safeDesc,
    };
    dispatch({ type: "EDIT_SAFE", payload });
    handleClose();
    setSafeName("");
    setSafeOwner("");
    setSafeType("Personal");
    setSafeDesc("");
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{edit ? "Update" : "Create"} Safe</h2>
        <div className="safe-icon-container">
          <img src={safeIcon} alt="safe-icon" id="safe-icon" />
          <p>
            A Safe is a logical unit to store the secrets. All the safes are
            created within Vault. You can control access only at the safe level.
            As a vault administrator you can manage safes but cannot view the
            content of the safe.
          </p>
        </div>
        <div className="safe-input-box">
          <label htmlFor="safe-name">Safe Name</label>
          <input
            type="text"
            id="safe-name"
            placeholder="Enter your Safe name"
            value={safeName}
            onChange={(e) => setSafeName(e.target.value)}
          />
        </div>
        <div className="safe-input-box">
          <label htmlFor="safe-name">Owner</label>
          <input
            type="text"
            id="safe-name"
            placeholder="Enter your Owner name"
            value={safeOwner}
            onChange={(e) => setSafeOwner(e.target.value)}
          />
        </div>
        <div className="safe-input-box">
          <label htmlFor="safe-type">Type</label>
          <select
            name="safe-type"
            id="safe-type"
            value={safeType}
            onChange={(e) => setSafeType(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="safe-input-box">
          <label htmlFor="safe-name">Description</label>
          <textarea
            type="text"
            id="safe-name"
            placeholder="Enter your Safe Description"
            value={safeDesc}
            onChange={(e) => setSafeDesc(e.target.value)}
          />
        </div>
        <p id="desc-validation">Please add minimum of 10 characters</p>
        <div className="close-create-box">
          <button type="button" onClick={handleClose} id="close-btn">
            Close
          </button>
          {edit ? (
            <button
              type="button"
              onClick={() => {
                handleEditData(editId);
              }}
              className={buttonEnabled}
              disabled={buttonEnabled == "btn-disabled" ? true: false}
              id="create-btn"
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                handleAddData();
              }}
              className={buttonEnabled}
              disabled={buttonEnabled == "btn-disabled" ? true: false}
              id="create-btn"
            >
              + Create
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Modal;
