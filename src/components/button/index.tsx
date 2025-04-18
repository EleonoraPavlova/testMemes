import { Button, ButtonProps } from "@heroui/react";
import { ReactElement, ReactNode } from "react";

type ButtonHerouiProps = {
  children: ReactNode;
} & ButtonProps;

const ButtonHeroui = ({
  children,
  color = "secondary",
  variant = "bordered",
  ...props
}: ButtonHerouiProps): ReactElement => {
  return (
    <Button color={color} size="sm" variant={variant} {...props}>
      {children}
    </Button>
  );
};

export default ButtonHeroui;
