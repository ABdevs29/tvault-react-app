import React, { useState } from "react";
import safe from "../../images/safe.png";
import addBtn from "../../images/add.png";
import addSecretsBtnDisabled from "../../images/add-folder.png";
import addSecretsBtnEnabled from "../../images/add-folder-active.png";
import secretIcon from "../../images/secret.png";
import secretFolderIcon from "../../images/folder.png";
import secretFolderActiveIcon from "../../images/folder-active.png";
import deleteIcon from "../../images/delete.png";
import "./SafesPage.css";
import Modal from "../../components/navbar/Modal/Modal";
import ModalTemp from "../../components/navbar/ModalTemplate/ModalTemp";

import { useDispatch, useSelector } from "react-redux";
import SecretsModal from "./SecretsModal/SecretsModal";
import SafesCardTemplate from "./SafesCardTemplate";

function SafesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTempOpen, setModalTempOpen] = useState(false);
  const [secretsPresent, setsecretsPresent] = useState(false);
  const [editId, setEditId] = useState(0);
  const [deleteId, setDeleteId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [safeName, setSafeName] = useState("");
  const [showName, setShowName] = useState("");
  const [safeOwner, setSafeOwner] = useState("");
  const [safeType, setSafeType] = useState("");
  const [safeDesc, setSafeDesc] = useState("");
  const [showDesc, setShowDesc] = useState("");
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(false);

  const safesList = useSelector((safesList) => safesList);
  const [filteredArray, setFilteredArray] = useState([...safesList.safesList]);
  // console.log(safesList);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setSafeName("");
    setSafeOwner("");
    setSafeType("Personal");
    setSafeDesc("");
    setModalOpen(true);
  };
  const hideModal = () => {
    setModalOpen(false);
  };
  const handleModalTempOpen = () => {
    setModalTempOpen(true);
  };
  const hideModalTemp = () => {
    setModalTempOpen(false);
  };

  const handleEditSafe = (id) => {
    setEditId(id);
    setEdit(true);
    // setSelect(true);
    const result = safesList.safesList.filter((el) => el.id == id);
    setSafeName(result[0].safeName);
    setSafeOwner(result[0].safeOwner);
    setSafeType(result[0].safeType);
    setSafeDesc(result[0].safeDesc);

    setModalOpen(true);
    // console.log(safeName)
  };

  const handleDeleteSafe = (id) => {
    setDeleteId(id);
    setEdit(false);
    setSelect(false);
    setShowName("");
    setShowDesc("");
    console.log(id);
    // const result = safesList.safesList.filter((el)=> el.id!== id);
    const payload = id;
    dispatch({ type: "DELETE_SAFE", payload });
  };

  const handleSelectSafe = (id) => {
    // console.log(id);
    setSelect(true);
    const result = safesList.safesList.filter((el) => el.id == id);
    setShowName(result[0].safeName);
    setShowDesc(result[0].safeDesc);
    const payload = id;
    dispatch({ type: "SELECT_SAFE", payload });
  };

  const handleDeleteSecret = (id) => {
    console.log(id);
    const payload = id;
    dispatch({ type: "DELETE_SECRETS", payload });
  };

  const filter = (data, value) => {
    if (value == "") {
      setFilteredArray(data.safesList);
    } else {
      const result = [
        ...data.safesList.filter((el) => {
          if (el.safeName.toLowerCase().includes(value)) {
            el.select = true;
            console.log(el);
            return el;
          } else {
            el.select = false;
          }
        }),
      ];
      setFilteredArray(result);
    }
  };
  // const safesList.safesList = filter(safesList.safesList, search.toLowerCase());
  return (
    <main className="safe-page-container">
      <article className="display-safes">
        <section>
          <div className="display-safes-all-safes">
            <p>
              All Safes{" "}
              <span>
                (
                {search == ""
                  ? safesList?.safesList?.length
                  : filteredArray?.length}
                )
              </span>
            </p>
            <div className="search-container">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABLCAYAAADakmGTAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVwSURBVHgB7ZvNUhtHEMe7Z+GYCm+Q9S0XI4ljKhCRU27Gx6QMLOIBIKdUGWxECuzKKXDLJdaiuJIj8ASGolKVnFjlBSI/QfABl1NI0+mR5DLBO2hWqx19eH4Xwc7oY//q6enpbgE4HA6Hw+FwOBwjAIIFguBhnh/yUqBPID55e52o+UoI8bdoUg1gMgrD8gUMOZkJFgQbxabANX6DIv87ZfQkoggEhqI5cczi1WEI6atgQVCekqKxxn+ug6lIGggo9OTk9rAJ1zfBlEVJARV+SR/6S7n6bGcbhoS+CLZcevQjW8Q6ZAbVhZycHwZrSyWYWoJNbBwitvxU1lxI2Vx5Hj49ggHSs2Btf3X1gl8ib/QEArUD1gkxeneNfATyAdEHU0gE1cr3BzAgehZsqbRx3lWslkjyQBIePQ93T3TTguA7vwleERG3DMS7aEg5/2v4JIIB0JNgS6XNLX4o3zqJ5L6g1+Uw3EsUWy0GD4Puwg3OpyUWbLHENwSiop1AVJcEK7dZVDdayx2v9li0Zf3bwMkvlZ15sIwHCckX5g5Z5/gYi8US1Jivhk9TLZcoOnlTi86OcoVZ/kKxGDeHNxr/bm729K/orA4WEUkmK+vSxlkdscLwhzr0ieqz3TL7wX3duGjFfXZJJBgCbunG1DLsp1hvqVZ21lk0jcWi/4ADZrCIsWAPVjcXdNbFoUGYxmd1o0FyRTfW2iAsYiwYEmgdMMpGpkeXVghBFBt7qaA5CNZTnVuTYC4YxEfzyrqyWIo34SUf6saa4qMFsISRYLzNqwA19ltsSrASdbeXPNXjxvgmvgBLGAnW8Bq+bixL3/UehMexl0maHc/6gJFggij2A6ngESxCKON3yyRn0ZSY+TACP+4y+69XYBFPYl0zNHxOPw5E8Q98YKQS7EPETDCEetxlm85W0fBQt/SsVZuMBCPdB7LobBW6zUedY8HWZzCZRFJ3loOpTs3RCkSoi7degiWMBJvgIqtujIuzVqJsDp59Xe2A0F54YySYqkjrYy5cAwtwvVN7lvUknYAlzHdJpGPNyNRiaSPDElvbutiOgthB9l+hxfy+sWBchQ5B4/xVnqx9U9nQwKvyLQXiMljEWLB2owjpsp8qB38IGbC0urkmdLn9dpb3FCySKHDlSs0e6EOM/GLpUV9Txkurj5c5ptnTTkA4sJFauk6iIogqTkznZv/lLOdXceOcM8tPF+byM7kv/+S5qYJJZVlsQT9pJ7B1VSu798EyiatGXKX5Yzo/V1RVm7hxFu1TwuZCbmbuonZ+VoOEqBLb3ZnPf8N2B5AWXoqFKPrdej9ZT4VcVamWOPGiW6SvQhEUFFZ/3u2aZFQBsBTiHhi1StF2q6I0AFL0VrBoYvIczFIrF3y8OuF0UE3Id8cY6YmPpZR3BOC9ZP0VFPExqbMBIYcV9pKYqbp3vmGrmEA8tH2mfA+LDSqp0juqmqOKt5kffklZKH2rLeqiDJdWHi+DBRI7/Zsox8tl/f3byvppUH7QI/l1tfLkqJCffUOIQexEpIVcvlivRaeJN5ok9C2BqJywkFd3WLX+NLx1rEo1nBgffSxYWiZd1J1dtAyq/JXQv7V2Vq51Cro8vtkq1enqOe/6mhn6tMz79FXvgxBQJMAcW81Uq+PwGqojEUm+ZKEiD14fdesnMw1pshItc8GyYJCijaRgikGJNrKCKQYh2kgLprAt2sgLprAp2lgIprAl2tgIprAh2lgJpshatLETTJGlaGPZjKLy/GZZlGbi8uDYdu90Fa2VhLxM/EuSsVyS14ldnh2xkv4OSjH2gin+J1oKsRSpE4ijgEpyFvKfHUv0fI8u7/cqlsPhcDgcDofD4XA4WvwHbvJ7PJqGiocAAAAASUVORK5CYII="
                alt="search-icon"
                id="search-icon"
              />
              <input
                type="search"
                name="search-box-input"
                id="search-box-input"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  filter(safesList, e.target.value);
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          {safesList?.safesList?.length == 0 ? (
            <div className="safe-image-text">
              <img src={safe} alt="safe" id="safe-image" />
              Create a safe and get started!
              <img
                src={addBtn}
                alt="add"
                id="add-btn-image"
                onClick={handleModalOpen}
              />
            </div>
          ) : (
            <div className="safe-list-display-card-container-wrapper">
              <div className="safe-list-display-card-container">
                {console.log(filteredArray)}
                {search == "" ? (
                  safesList.safesList.map((el) => {
                    return (
                      <SafesCardTemplate
                        el={el}
                        handleSelectSafe={handleSelectSafe}
                        handleEditSafe={handleEditSafe}
                        setSelect={setSelect}
                        handleDeleteSafe={handleDeleteSafe}
                      />
                    );
                  })
                ) : filteredArray?.length == 0 ? (
                  <div className="not-found-text">No Safe found!</div>
                ) : (
                  filteredArray.map((el) => {
                    return (
                      <SafesCardTemplate
                        el={el}
                        handleSelectSafe={handleSelectSafe}
                        handleEditSafe={handleEditSafe}
                        setSelect={setSelect}
                        handleDeleteSafe={handleDeleteSafe}
                      />
                    );
                  })
                )}
              </div>
              <div className="add-btn-container">
                <img
                  src={addBtn}
                  alt="add"
                  id="add-btn-image"
                  onClick={() => {
                    setEdit(false);
                    handleModalOpen();
                  }}
                />
              </div>
            </div>
          )}
        </section>
      </article>
      <article className="display-secrets">
        <div className="safes-display-banner">
          <div className="safes-display-caption">
            {select && safesList?.safesList?.length !== 0
              ? showName
              : "No Safes Created Yet"}
          </div>
          <div
            className="safes-display-para"
            style={
              !select
                ? {
                    overflow: "visible",
                    textOverflow: "clip",
                    whiteSpace: "normal",
                  }
                : {}
            }
          >
            {select && safesList?.safesList?.length !== 0
              ? showDesc
              : "Create a safe to see your secrets, folders and perm"}
          </div>
        </div>
        <section className="secrets-display-box">
          <div className="secrets-display-box-banner">
            <div>Secrets</div>
            <div>
              <img
                src={
                  select && safesList?.safesList?.length !== 0
                    ? addSecretsBtnEnabled
                    : addSecretsBtnDisabled
                }
                alt="add-folder"
                id="addSecretsBtn"
                disabled={!select}
                onClick={!select ? null : () => handleModalTempOpen()}
              />
            </div>
          </div>
          <div className="secrets-container">
            <div className="zero-secrets">
              {`${safesList?.safesList
                ?.filter((el) => {
                  if (el.select == true) {
                    {
                      /* console.log(el.secrets.length) */
                    }
                    return el?.secrets?.length;
                  }
                })
                .map((obj) => {
                  return obj?.secrets?.length;
                })}` == 0
                ? 0
                : `${safesList?.safesList
                    ?.filter((el) => {
                      if (el.select == true) {
                        {
                          /* console.log(el.secrets.length) */
                        }
                        return el.secrets?.length;
                      }
                    })
                    .map((obj) => {
                      return obj?.secrets?.length;
                    })}`}{" "}
              Secrets
            </div>

            {safesList?.safesList
              ?.map((el) => {
                if (el?.select == true && el?.secrets?.length > 0) {
                  return true;
                } else return false;
              })
              .includes(true) ? (
              <div className="secret-card-container">
                {safesList?.safesList?.map((el) => {
                  if (el.select == true) {
                    return el?.secrets?.map((secret) => {
                      return (
                        <div className="secret-card">
                          <div className="secret-folder-images">
                            <img
                              src={secretFolderIcon}
                              alt="card-icon"
                              id="secretFolderIcon"
                            />
                            <img
                              src={secretFolderActiveIcon}
                              alt="card-icon"
                              id="secretFolderActiveIcon"
                            />
                          </div>
                          <div className="secret-card-text">
                            <h4>{secret.secret}</h4>
                            <p>a few seconds ago</p>
                          </div>
                          <img
                            src={deleteIcon}
                            alt="delete-icon"
                            id="secretDeleteIcon"
                            onClick={() => handleDeleteSecret(secret.id)}
                          />
                        </div>
                      );
                    });
                  }
                })}
              </div>
            ) : (
              <div className="secrets-list-box">
                <img src={secretIcon} alt="secret-Icon" id="secretIcon" />
                <p className="secret-add-text">
                  Add a <span>Folder</span> and then you'll be able to add{" "}
                  <span>Secrets</span> to view them all here
                </p>
                <button
                  id="add-secrets-btn"
                  className={select ? "btn-enabled" : "btn-disabled"}
                  disabled={!select}
                  onClick={() => {
                    handleModalTempOpen();
                  }}
                >
                  + Add
                </button>
              </div>
            )}
          </div>
        </section>
      </article>
      <Modal
        show={modalOpen}
        handleClose={hideModal}
        editId={editId}
        edit={edit}
        safeName={safeName}
        setSafeName={setSafeName}
        safeOwner={safeOwner}
        setSafeOwner={setSafeOwner}
        safeType={safeType}
        setSafeType={setSafeType}
        safeDesc={safeDesc}
        setSafeDesc={setSafeDesc}
        setSelect={setSelect}
        setShowName={setShowName}
        setShowDesc={setShowDesc}
        setFilteredArray={setFilteredArray}
      ></Modal>
      <SecretsModal show={modalTempOpen} handleClose={hideModalTemp} />
    </main>
  );
}

export default SafesPage;
