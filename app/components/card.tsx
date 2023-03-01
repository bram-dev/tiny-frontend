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
        "taa-w-full taa-bg-white taa-shadow-[0_1px_3px_-1px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      {title && (
        <div className="taa-border-w-1 taa-flex taa-w-full taa-items-center taa-border-b taa-border-gray-300 taa-p-4 taa-text-black-700">
          {icon && (
            <div className="taa-pr-3 taa-text-lg">
              <FontAwesomeIcon icon={icon} size="lg" fixedWidth />
            </div>
          )}

          <div className="taa-flex taa-flex-col taa-overflow-hidden">
            <h2 className="taa-truncate taa-text-lg taa-font-medium taa-leading-none taa-text-black-500">
              {title}
            </h2>
            <h3 className="taa-truncate taa-text-xs taa-font-normal taa-text-gray-700">
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
