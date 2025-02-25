import React from "react";

interface Props {
  className?: string;
  size?: number | string;
  color?: string;
}

const IconSearch = React.memo(
  ({ className = "", size = 20, color = "#fff" }: Props) => (
    <svg
      className={className}
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="m1022.5 952.5-260-260c40-52.5 62.5-120 62.5-192.5 0-180-145-325-325-325s-325 145-325 325 145 325 325 325c72.5 0 137.5-22.5 192.5-62.5l260 260c10 10 22.5 15 35 15s25-5 35-15c20-20 20-50 0-70zm-522.5-227.5c-125 0-225-100-225-225s100-225 225-225 225 100 225 225-100 225-225 225z"
      />
    </svg>
  )
);

IconSearch.displayName = "IconSearch";

export { IconSearch };
