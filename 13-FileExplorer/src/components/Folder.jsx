import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    })
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div
          className="folder"
          style={{ cursor: "pointer" }}
          onClick={() => setExpand(!expand)}
        >
          <span>📁 {explorer.name}</span>

          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>➕📁</button>
            <button onClick={(e) => handleNewFolder(e, false)}>➕📃</button>
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
               onBlur={()=>setShowInput({...showInput, visible: false})}
               />
            </div>
          )}

          {explorer.items.map((item) => {
            return <Folder key={item.id} explorer={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📃 {explorer.name}</span>;
  }
};

export default Folder;
