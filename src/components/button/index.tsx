import {Button} from "@heroui/react";

type ButtonHerouiProps = {
 name: string;
}

const ButtonHeroui = ({name}: ButtonHerouiProps) => {
 return <Button color="primary" size="sm" variant="ghost">{name}</Button>;
}

export default ButtonHeroui;