import {Button, ButtonProps} from "@heroui/react";
import {ReactElement} from "react";

const ButtonHeroui = ({name, ...props}: ButtonProps): ReactElement => {
 return <Button color="primary" size="sm" variant="ghost" {...props} name={name}/>;
}

export default ButtonHeroui;