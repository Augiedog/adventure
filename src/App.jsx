import { useState } from "react";
import story from "./story/index";
import StoryPage from "./component/StoryPage";

function App() {
  const [currentPageId, setCurrentPageId] = useState("forest:entrance");

  const [chapterId, page] = currentPageId.split(":");
  const currentPage = story[chapterId][page];

  console.log(currentPageId, 'chapters')

  const handleChoice = (nextPageId) => {
    // setCurrentChapter(nextChapterId);
    setCurrentPageId(nextPageId);
  };

  return (
    <div className="app">
      <StoryPage page={currentPage} onChoose={handleChoice} />
    </div>
  );
}

export default App;
