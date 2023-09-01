import React from "react";

import clsx from "clsx";

const Button = (props) => {
  const { children, className = "" } = props;
  return (
    <button
      {...props}
      className={clsx(
        className,
        "py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
