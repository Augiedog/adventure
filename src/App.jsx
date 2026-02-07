import { useState } from "react";
import story from "./story";
import StoryPage from "./component/StoryPage";

function App() {
  const [currentPageId, setCurrentPageId] = useState(story.start);

  const currentPage = story.pages[currentPageId];

  const handleChoice = (nextPageId) => {
    setCurrentPageId(nextPageId);
  };

  return (
    <div className="app">
      <StoryPage page={currentPage} onChoose={handleChoice} />
    </div>
  );
}

export default App;

