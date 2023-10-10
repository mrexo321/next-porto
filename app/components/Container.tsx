import React, { FC } from "react";

interface Iprops {
  children?: any;
  className?: string;
}

const Container: FC<Iprops> = ({ children, className }) => {
  return (
    <div className={`container mx-auto max-w-7xl + ${className}`}>
      {children}
    </div>
  );
};

export default Container;
