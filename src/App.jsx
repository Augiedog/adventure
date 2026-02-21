import { useState } from "react";
import story from "./story/index.js";
import StoryPage from "./component/StoryPage";
import './App.css';

function App() {
  const [currentPageId, setCurrentPageId] = useState("forest:start");
  const [chapterId, pageId] = currentPageId.split(":");
  const chapter = story[chapterId];
  let resolvedPageId = pageId;
  if (!chapter.pages[pageId] && chapter[pageId]) {
    resolvedPageId = chapter[pageId];
  }

  const currentPage = chapter.pages[resolvedPageId];
  if (!currentPage) {
    return <div>Page not found: {currentPageId}</div>;
  }

  const handleChoice = (nextPageId) => {
    setCurrentPageId(nextPageId);
  };

  return (
    <div className="App">
      <StoryPage page={currentPage} onChoose={handleChoice} />
    </div>
  );
}

export default App;
