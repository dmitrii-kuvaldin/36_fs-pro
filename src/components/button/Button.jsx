import './button.css';
function Button({ buttonText, isGetButton }) {
  return (
    <button
      className={`button ${isGetButton ? 'button-danger' : 'button-primary'}`}
    >
      {buttonText}
    </button>
  );
}

export default Button;
