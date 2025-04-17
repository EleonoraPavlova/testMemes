import {Button, ButtonProps} from "@heroui/react";
import {ReactElement, ReactNode} from "react";

type ButtonHerouiProps = {
 children: ReactNode;
} & ButtonProps;

const ButtonHeroui = ({children, ...props}: ButtonHerouiProps): ReactElement => {
 return <Button color="secondary" size="sm" variant="bordered" {...props}>
  {children}
 </Button>;
}

export default ButtonHeroui;