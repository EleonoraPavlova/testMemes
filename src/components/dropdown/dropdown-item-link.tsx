import { MouseEvent, ReactElement } from "react";

import EditDocumentIcon from "@/assets/icons/edit";
import ImageLink from "@/components/image-link";

type DropdownItemLinkProps = {
  value: string | number;
  onEditClick: (key: string, value: string) => (e: MouseEvent<HTMLButtonElement>) => void;
  fieldKey: string;
};

const DropdownItemLink = ({
  value,
  fieldKey,
  onEditClick,
}: DropdownItemLinkProps): ReactElement => {
  return (
    <div className="flex items-center justify-between w-full gap-1 overflow-hidden">
      <span className="truncate flex-1 w-[150px]">
        {fieldKey === "image" ? (
          <ImageLink imageUrl={String(value)} />
        ) : (
          <>
            <b className="mr-1.5">{fieldKey}:</b> {String(value)}
          </>
        )}
      </span>
      {fieldKey !== "id" && (
        <button
          className="p-0 bg-transparent border-none"
          onClick={onEditClick(fieldKey, String(value))}
        >
          <EditDocumentIcon />
        </button>
      )}
    </div>
  );
};

export default DropdownItemLink;
