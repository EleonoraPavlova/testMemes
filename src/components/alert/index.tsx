import { Alert, AlertProps } from "@heroui/react";
import { ReactElement } from "react";

const AlertHeroui = ({ title, color, ...props }: AlertProps): ReactElement => {
  return (
    <span className="fixed bottom-4 left-4 z-50 max-w-sm">
      <Alert
        hideIconWrapper
        title={title}
        color={color}
        variant={"faded"}
        className="text-sm py-2 px-4"
        {...props}
      />
    </span>
  );
};
export default AlertHeroui;
