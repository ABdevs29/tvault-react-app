import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ModalTemp from "../../../components/navbar/ModalTemplate/ModalTemp";

function SecretsModal({ show, handleClose }) {
  const [secret, setSecret] = useState("");
  const dispatch = useDispatch();
  const buttonEnabled = secret.match(/^[a-z0-9_]{3,100}$/) ? "btn-enabled" : "btn-disabled";

  const handleSave = () => {
    const payload = {
      secret,
      id: new Date(),
    };
    dispatch({ type: "ADD_SECRETS", payload });
    handleClose();
    setSecret("");
  };

  const validateSecretName = () => {
    if (secret.match(/^[a-z0-9_]{3,100}$/)) {
      handleSave();
    }
  }
  return (
    <ModalTemp show={show}>
      <form className="secrets-form">
        <h1>Add Folder</h1>
        <div className="folder-name-input">
          <label htmlFor="folderName">Folder Name</label>
          <input
            type="text"
            id="folderName"
            placeholder="Enter secret here"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
        </div>
        <p>
          Please enter a minimum of 3 characters lowercase, number and
          underscores only.
        </p>
        <div className="btn-group-secrets-form">
          <button
            className="close-btn"
            type="button"
            onClick={() => handleClose()}
          >
            Cancel
          </button>
          <button className={buttonEnabled} id="create-btn" type="button"  onClick={() => validateSecretName()}>
            Save
          </button>
        </div>
      </form>
    </ModalTemp>
  );
}

export default SecretsModal;
