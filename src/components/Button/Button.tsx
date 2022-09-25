import React, { FC } from "react";

import "./Button.scss";

type Props = {
  Outlined: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button: FC<Props> = ({ Outlined = false, onClick, children }: Props) => {
  return (
    <button
      className={Outlined ? "outlined button" : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
