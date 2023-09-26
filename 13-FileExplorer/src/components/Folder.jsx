import { useEffect } from "react";
import { useState } from "react";

const Folder = ({
  explorer,
  handleInsertNode,
  handleDeleteNode,
  handleEditNode,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(explorer.name);

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({
        ...showInput,
        visible: false,
      });
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorer.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedName(explorer.name);
  };
  
  const handleSaveEdit = () => {
    setIsEditing(false);
    handleEditNode(explorer.id, editedName);
  };
  
  const handleClickOutside = () => {
    if (isEditing) {
      handleCancelEdit();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isEditing]);



  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }} onClick={handleClickOutside}>
        <div
          className="folder"
          style={{ cursor: "pointer" }}
          onClick={() => setExpand(!expand)}
        >
          <span>📁 
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSaveEdit();
                }
              }}
              autoFocus
              onBlur={handleCancelEdit}

            />
          ) : (
            `${explorer.name}`
          )}
        </span>


          <div>
          <button onClick={(e) => handleNewFolder(e, true)}>➕📁</button>
          <button onClick={(e) => handleNewFolder(e, false)}>➕📃</button>
          <button onClick={handleEdit}>✏️</button>
          <button onClick={handleDelete}>❌</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", marginLeft: "25px" }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📃"}</span>
              <input
                className="inputContainer__input"
                type="text"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {explorer.items.map((item) => {
            return (
              <Folder
                key={item.id}
                explorer={item}
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                handleEditNode={handleEditNode}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
        <div className="file__container">
          <span>📃 
            {isEditing ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSaveEdit();
                  }
                }}
                onBlur={handleCancelEdit}
                autoFocus
              />
            ) : (
              `${explorer.name}`
            )}
          </span>
          <button onClick={handleEdit}>✏️</button>
          <button onClick={handleDelete}>❌</button>
        </div>
      );
  }
};

export default Folder;
