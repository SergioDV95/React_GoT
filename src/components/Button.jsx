function Button({
  text = "continue",
  classes = "px-4 py text-white rounded-xl",
  color = "bg-blue-600",
  event = () => {
    console.log("click");
  },
}) {
  return (
    <button onClick={event} className={`${classes} ${color}`}>
      {text}
    </button>
  );
}

export default Button;
