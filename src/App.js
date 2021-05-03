import { useState } from "react";
import "./App.css";
import AppleMenu from "./components/content/appleMenu/AppleMenu";
import FolderContent from "./components/content/folderContent/FolderContent";
import Folders from "./components/content/folders/Folders";
import MenuBar from "./components/menuBar/MenuBar";
import StatusBar from "./components/statusBar/StatusBar";

const App = () => {
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const toggleAppleMenu = () => {
    setIsAppleMenuOpen(!isAppleMenuOpen);
  };

  const closeAppleMenu = () => {
    if (isAppleMenuOpen) {
      setIsAppleMenuOpen(false);
    }
  };

  const openFolderContent = () => {
    setIsFolderOpen(true);
  };

  const closeFolderContent = () => {
    setIsFolderOpen(false);
  };

  return (
    <>
      <div className="wrapper">
        <StatusBar toggleAppleMenu={toggleAppleMenu} />
        <div className="inner_wrapper" onClick={closeAppleMenu}>
          <Folders openFolderContent={openFolderContent} />
          <FolderContent
            isFolderOpen={isFolderOpen}
            closeFolderContent={closeFolderContent}
          />
          <AppleMenu isAppleMenuOpen={isAppleMenuOpen} />
        </div>
        <MenuBar />
      </div>
    </>
  );
};

export default App;
