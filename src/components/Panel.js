import classnames from "classnames";
// {...rest} applies all event handlers such as onClick onMouseOver etc
function Panel({ children, ...rest }) {
  const classes = classnames(rest.className, "border rounded p-3 shadow bg-white w-full");
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}

export default Panel;
