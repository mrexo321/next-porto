import React, { FC } from "react";

interface Iprops {
  children?: any;
  className?: any;
}
const Button: FC<Iprops> = ({ children, className }) => {
  return (
    <button className={className + ` rounded-lg py-2 px-4`}>{children}</button>
  );
};

export default Button;
