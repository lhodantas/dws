import React from "react";

interface Props {
  className?: string;
  size?: number | string;
  color?: string;
}

const IconFilters = React.memo(
  ({ className = "", size = 32, color = "#020318" }: Props) => (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={color} strokeWidth="6" strokeLinecap="round">
        <line x1="10" y1="20" x2="40" y2="20" />
        <line x1="60" y1="20" x2="90" y2="20" />
        <line x1="50" y1="10" x2="50" y2="30" />

        <line x1="10" y1="50" x2="30" y2="50" />
        <line x1="50" y1="50" x2="90" y2="50" />
        <line x1="40" y1="40" x2="40" y2="60" />

        <line x1="10" y1="80" x2="50" y2="80" />
        <line x1="70" y1="80" x2="90" y2="80" />
        <line x1="60" y1="70" x2="60" y2="90" />
      </g>
    </svg>
  )
);

IconFilters.displayName = "IconFilters";

export { IconFilters };
