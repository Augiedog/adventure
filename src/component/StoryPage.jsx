import ChoiceButton from "./ChoiceButton";
import './StoryPage.css'

function StoryPage({ page, onChoose, gameState }) {

  const availableChoices = page.choices.filter(choice => {

    if (choice.requiresFlag &&
      !gameState.flags[choice.requiresFlag]) {
      return false;
    }

    if (choice.requiresItem &&
      !gameState.inventory.includes(choice.requiresItem)) {
      return false;
    }

    return true;
  });

  return (
    <div className="story-page">
      {page.image && (
        <img src={page.image} alt="" />
      )}

      <p>{page.text}</p>

      <div className="choices">
        {availableChoices.length === 0 ? (
          <h1>The End</h1>
        ) : (
          availableChoices.map((choice, index) => (
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
