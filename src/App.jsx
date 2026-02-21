import { useState } from "react";
import story from "./story/index.js";
import StoryPage from "./component/StoryPage";
import './App.css';

function App() {
  const [currentPageId, setCurrentPageId] = useState("forest:entrance");

  const [chapterId, pageId] = currentPageId.split(":");
  const currentPage = story[chapterId]?.pages?.[pageId];
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
