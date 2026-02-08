import ChoiceButton from "./ChoiceButton";
import './StoryPage.css'

function StoryPage({ page, onChoose }) {
  // console.log("props from story", page)
  return (
    <div className="story-page">
      {page.image && (
        <img
          src={page.image}
          alt=""
          className="story-image"
        />
      )}

      <p className="story-text">{page.text}</p>

      <div className="choices">
        {page.choices.length === 0 ? (
          <h1>The End</h1>
        ) : (
          page.choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              label={choice.label}
              onClick={() => onChoose(choice.next)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default StoryPage;
