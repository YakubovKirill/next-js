import { memo } from "react";
import { ActionButtonProps } from "./ActionButton.props";

const ActionButton = ({ label, variant='simple', children, ...props }: ActionButtonProps): JSX.Element => {
  const styleVariant = {
    simple: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    outline: "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
  }
  return (
    <button
      className={styleVariant[variant]}
      { ...props }
    >
      { children ? children : label }
    </button>
  );
}

export default memo( ActionButton );