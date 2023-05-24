import { Link } from "react-router-dom";
import "./Button.scss";

function Button({ className, to, children, requiresLogin }) {
  let Tag;
  if (to && !requiresLogin) {
    Tag = Link;
  } else {
    Tag = "button";
  }

  const prop = { to };
  const classNames = { className };

  return (
    <Tag {...classNames} {...prop}>
      {children}
    </Tag>
  );
}

export default Button;
