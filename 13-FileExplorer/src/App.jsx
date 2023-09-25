
import { useState } from 'react';
import explorer from './data/folderData.js';
import Folder from './components/Folder.jsx';
function App() {

  const [explorerData, setExplorerData] = useState(explorer);
  
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  )
}

export default App;
