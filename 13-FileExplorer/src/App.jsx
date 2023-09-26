
import { useState } from 'react';
import './styles.css';
import explorer from './data/folderData.js';
import Folder from './components/Folder.jsx';
import useTraverseTree from './hooks/use-traverse-tree';
function App() {

  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode, editNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  }

  const handleDeleteNode = (nodeId) => {
    const finalTree = deleteNode(explorerData, nodeId);
    setExplorerData(finalTree);
  }

  const handleEditNode = (nodeId, newName) => {
    const finalTree = editNode(explorerData, nodeId, newName);
    setExplorerData(finalTree);
  }

  if(explorerData!==null){ 
    return (
      <div className="App">
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} handleDeleteNode={handleDeleteNode} handleEditNode={handleEditNode} />
      </div>
    )
  }else{
    return (
      <div className="App">
        <h1>File Explorer Project is Empty</h1>
      </div>
    )
  }


  
}

export default App;
