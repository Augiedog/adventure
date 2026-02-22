import { useEffect, useState } from "react";
import story from "./story/index.js";
import StoryPage from "./component/StoryPage";
import './App.css';

function App() {
  const [currentPageId, setCurrentPageId] = useState("forest:start");
  const [gameState, setGameState] = useState({
    flags: [],
    inventory: [],
  })
  const [chapterId, pageId] = currentPageId.split(":");
  const chapter = story[chapterId];
  let resolvedPageId = pageId;
  if (!chapter.pages[pageId] && chapter[pageId]) {
    resolvedPageId = chapter[pageId];
  }

  const currentPage = chapter.pages[resolvedPageId];
  useEffect(() => {
    if (!currentPage?.effects) return;

    setGameState(prev => {
      const newFlags = { ...prev.flags };
      const newInventory = [...prev.inventory];

      if (currentPage.effects.setFlag) {
        newFlags[currentPage.effects.setFlag] = true;
      }

      if (currentPage.effects.addItem) {
        newInventory.push(currentPage.effects.addItem);
      }

      return {
        flags: newFlags,
        inventory: newInventory
      };
    });

  }, [currentPageId], [currentPage.effects]);

  if (!currentPage) {
    return <div>Page not found: {currentPageId}</div>;
  }

  const handleChoice = (nextPageId) => {
    setCurrentPageId(nextPageId);
  };

  // console.log(currentPage, "currentPage")
  console.log(gameState, "gameState")
  
  return (
    <div className="App">
      <StoryPage page={currentPage} onChoose={handleChoice} gameState={gameState} />
    </div>
  );
}

export default App;
