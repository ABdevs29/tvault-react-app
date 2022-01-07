import React from "react";
import safeIcon from "../../images/safe-icon.png";
import editIcon from "../../images/edit.png";
import deleteIcon from "../../images/delete.png";

export default function SafesCardTemplate({el, handleSelectSafe, handleEditSafe, setSelect, handleDeleteSafe}) {
  return <div
    className={el.select
      ? "safe-list-display-card-select"
      : "safe-list-display-card"}
    key={el.id}
    onClick={() => handleSelectSafe(el.id)}
  >
  <div className="safe-list-logo-name">
  <img src={safeIcon} alt="safe icon" id="safeIcon" />
    <div className="safe-list-name-display-box">
      <div>{el.safeName}</div>
      <div id="last-updated">
        Last Updated: few seconds ago
      </div>
    </div>
  </div>

    <div className="edit-delete-container">
      <img
        src={editIcon}
        alt="edit icon"
        id="editIcon"
        onClick={() => handleEditSafe(el.id)} />
      <img
        src={deleteIcon}
        alt="delete icon"
        id="deleteIcon"
        onClick={() => {
          setSelect(false);
          handleDeleteSafe(el.id);
        }} />
    </div>
  </div>;
}
