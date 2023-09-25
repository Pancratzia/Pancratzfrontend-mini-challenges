import { useState } from "react";

const Folder = ({ explorer }) => {


    const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div className="folder" style={{ cursor: "pointer" }} onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}>
          {explorer.items.map((item) => {
            return <span key={item.id}>{item.name}</span>;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📃 {explorer.name}</span>;
  }
};

export default Folder;
