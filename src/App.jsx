import { useState } from "react";
import story from "./story/index.js";
import StoryPage from "./component/StoryPage";

function App() {
  const [currentPageId, setCurrentPageId] = useState("forest:start");

  const [chapterId, pages] = currentPageId.split(":");
  const currentPage = story[chapterId][pages];

  console.log(currentpage, 'chapters')

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
