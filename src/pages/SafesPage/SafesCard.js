import React, { useState } from "react";
import safeIcon from "../../images/safe-icon.png";
import editIcon from "../../images/edit.png";
import deleteIcon from "../../images/delete.png";

export function SafesCard(el, handleSelectSafe, handleEditSafe, handleDeleteSafe) {
    const [select, setSelect] = useState(false);
    // setSelect(el.select);
    const ifSelected = select ? "safe-list-display-card-select": "safe-list-display-card"
  return <div className={ifSelected} key={el.id} onClick={() => handleSelectSafe(el.id)}>
    <img src={safeIcon} alt="safe icon" id="safeIcon" />
    <div className="safe-list-name-display-box">
      <div>{el.safeName}</div>
      <div id="last-updated">
        Last Updated: few seconds ago
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
        onClick={() => handleDeleteSafe(el.id)} />
    </div>
  </div>;
}
