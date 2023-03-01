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
    "taa-p-3 flex taa-items-center taa-rounded-md",
    {
      "taa-bg-blue-100 taa-text-blue-700": type === "info",
      "taa-bg-red-100 taa-text-red-700": type === "danger",
      "taa-bg-orange-100 taa-text-orange-700": type === "warning",
      "taa-bg-green-100 taa-text-green-800": type === "success",
      "taa-bg-black-100 taa-text-black-700": type === "dark",
    },
    className
  );

  return (
    <div className={styling}>
      {icon && <FontAwesomeIcon icon={icon} className="taa-mr-2" fixedWidth />}

      <span className="taa-text-md">{children}</span>

      {onClose && (
        <button className="taa-ml-auto taa-justify-end taa-self-end taa-pl-2" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  );
}
