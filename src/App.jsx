import { useState } from "react";
import story from "./story/index.js";
import StoryPage from "./component/StoryPage";
import './App.css';

function App() {
  const [currentPageId, setCurrentPageId] = useState("forest:start");

  const [chapterId, pageId] = currentPageId.split(":");

  const chapter = story[chapterId];

  let resolvedPageId = pageId;

  // If pageId is not in pages but exists as a key on chapter,
  // treat it as an alias (like start → entrance)
  if (!chapter.pages[pageId] && chapter[pageId]) {
    resolvedPageId = chapter[pageId];
  }

  const currentPage = chapter.pages[resolvedPageId];

  // const currentPage = story[chapterId]?.pages?.[pageId];
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
