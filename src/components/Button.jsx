const Button = ({border, button, fill=false, bgColor, color}) => {
  return (
    <a
      className={`inline-block px-4 py-2 rounded-3xl border text-sm hover:opacity-80 duration-200 ${border} ${fill ? (bgColor) : undefined} ${color}`}
      href={button.url}
      target="_blank"
    >
      {button.text}
    </a>
  );
};
export default Button;
