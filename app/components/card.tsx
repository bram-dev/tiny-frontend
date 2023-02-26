import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { ReactNode } from "react";

export type CardProps = {
  icon?: IconProp;
  title?: string;
  subTitle?: string;
  children?: ReactNode;
  className?: string;
};

export type CardChildProps = {
  children?: ReactNode;
  className?: string;
};

export function Card({
  title,
  subTitle,
  icon,
  children,
  className,
}: CardProps) {
  const mapped = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && (child as React.ReactElement<any>)) {
      const name =
        typeof child.type === "string" ? child.type : child.type.name;

      switch (name) {
        case Card.Section.name:
        case Card.Footer.name:
          return child;
      }
    }

    return child;
  });

  return (
    <div
      className={classNames(
        "w-full bg-white shadow-[0_1px_3px_-1px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      {title && (
        <div className="border-w-1 flex w-full items-center border-b border-gray-300 p-4 text-black-700">
          {icon && (
            <div className="pr-3 text-lg">
              <FontAwesomeIcon icon={icon} size="lg" fixedWidth />
            </div>
          )}

          <div className="flex flex-col overflow-hidden">
            <h2 className="truncate text-lg font-medium leading-none text-black-500">
              {title}
            </h2>
            <h3 className="truncate text-xs font-normal text-gray-700">
              {subTitle}
            </h3>
          </div>
        </div>
      )}

      {mapped}
    </div>
  );
}

function Empty({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

Card.Empty = Empty;

function Section({ children, className }: CardChildProps) {
  return (
    <div className={classNames("p-4 text-black-500", className)}>
      {children}
    </div>
  );
}

Card.Section = Section;

function Footer({ children, className }: CardChildProps) {
  return (
    <div
      className={classNames(
        "h-max border-t border-gray-300 p-4 text-black-500",
        className
      )}
    >
      {children}
    </div>
  );
}

Card.Footer = Footer;
