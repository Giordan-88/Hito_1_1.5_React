function Button({ buttonText, className = '', onClick }) {
  return (
    <button
      type="button"
      className={`btn m-1 ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}


export default Button;