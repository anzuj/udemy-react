
import classnames from "classnames";
// {...rest} applies all event handlers such as onClick onMouseOver etc
function Button({ children, primary, secondary, success, warning, danger, outline, rounded, ...rest}) {
/* if(primary && secondary){
    throw new Error("Can't have both 'primary' and 'secondary' button type")
}
 */

const classes = classnames(rest.className,'flex items-center px-3 py-1.5 border m-1', {
    'border-blue-500 bg-blue-500 text-white' : primary,
    'border-gray-900 bg-gray-900 text-white' : secondary,
    'border-green-500 bg-green-500 text-white' : success,
    'border-yellow-400 bg-yellow-400 text-white' : warning,
    'border-red-500 bg-red-500 text-white' : danger,
    'rounded-full': rounded,
    'bg-white ': outline,
    'text-blue-500': outline && primary,
    'text-black': outline && secondary,
    'text-green-500': outline && success,
    'text-red-500': outline && danger,
    'text-yellow-400': outline && warning,
})

// {...rest} applies all event handlers such as onClick onMouseOver etc
  return <button {...rest} className={classes}>{children}</button>;
}



export default Button;
