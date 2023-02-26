import { MouseEventHandler, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export type AlertProps = {
  type?: "info" | "danger" | "warning" | "success" | "dark";
  icon?: IconProp;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  className?: string;
};

export function Alert({
  type = "info",
  icon,
  onClose,
  children,
  className,
}: AlertProps) {
  const styling = classNames(
    "p-3 flex items-center rounded-md",
    {
      "bg-blue-100 text-blue-700": type === "info",
      "bg-red-100 text-red-700": type === "danger",
      "bg-orange-100 text-orange-700": type === "warning",
      "bg-green-100 text-green-800": type === "success",
      "bg-black-100 text-black-700": type === "dark",
    },
    className
  );

  return (
    <div className={styling}>
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" fixedWidth />}

      <span className="text-md">{children}</span>

      {onClose && (
        <button className="ml-auto justify-end self-end pl-2" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  );
}
