import useNavigation from "../hooks/use-navigation";
import classnames from "classnames";

export default function Link({ to, children , className, activeClassName}) {
  const { navigate, currentPath } = useNavigation();


  const classes = classnames("text-blue-500", className,
  currentPath === to && activeClassName);
  const handleClick = (event) => {
    //when holding down Ctrl, let user open up in a new browser tab
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    //internal navigation
    event.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
