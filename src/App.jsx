import { useState } from "react";
import story from "./story/story";
// import monster from "./monster"; 
import StoryPage from "./component/StoryPage";

function App() {
  // const [chapterId, setCurrentChapter] = useState(monster.dragon);
  const [currentPageId, setCurrentPageId] = useState(story.start);

  const currentPage = story.pages[currentPageId];

  console.log(currentPage, 'chapters')

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
