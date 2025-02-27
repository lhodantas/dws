import React from "react";

interface Props {
  className?: string;
  size?: number | string;
  color?: string;
}

const IconAngleDown = React.memo(
  ({ className = "", size = 32, color = "#D31450" }: Props) => (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 122 67"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 10l56 50 56-50" />
    </svg>
  )
);

IconAngleDown.displayName = "IconAngleDown";

export { IconAngleDown };
