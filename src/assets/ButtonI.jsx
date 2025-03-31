function ButtonI({ buttonText, className = '', onClick = ''  }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick(e);
    }
  };
  return (
    <button
      type="button"
      className={`btn m-1 ${className}`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}


export default ButtonI;