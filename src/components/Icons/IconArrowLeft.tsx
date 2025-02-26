import React from "react";

interface Props {
  className?: string;
  size?: number | string;
  color?: string;
}

const IconArrowLeft = React.memo(
  ({ className = "", size = 32, color = "#D31450" }: Props) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M92.2,48H15.3l28.7-28.8c1.1-1.1,1.1-2.9,0-3.9c-1.1-1.1-2.8-1.1-3.9,0L5,50.4l35.2,35.2c0.5,0.5,1.2,0.8,1.9,0.8
      c0.7,0,1.4-0.3,1.9-0.8c1.1-1.1,1.1-3,0-4L15.7,53h76.6c1.5,0,2.8-1,2.8-2.5C95,49,93.7,48,92.2,48z"
        fill={color}
      />
    </svg>
  )
);

IconArrowLeft.displayName = "IconArrowLeft";

export { IconArrowLeft };
