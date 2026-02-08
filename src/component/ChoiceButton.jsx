import './ChoiceButton.css'

function ChoiceButton({ label, onClick }) {
  return (
    <button className="choice-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default ChoiceButton;
