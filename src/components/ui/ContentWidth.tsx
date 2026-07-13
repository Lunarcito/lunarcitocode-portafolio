import { ReactNode } from "react";

type ContentWidthProps = {
  children: ReactNode;
  className?: string;
};

export function ContentWidth({ children, className = "" }: ContentWidthProps) {
  return <div className={`max-w-4xl ${className}`}>{children}</div>;
}
