import { Link } from "react-router-dom";

function Button({ className, to, children, requiresLogin }) {
  let Tag;
  if (to && !requiresLogin) {
    Tag = Link;
  } else {
    Tag = "div";
  }

  const prop = { className, to };

  return (
    <Tag className={className} {...prop}>
      {children}
    </Tag>
  );
}

export default Button;
