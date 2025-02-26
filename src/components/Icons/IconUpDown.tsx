import React from "react";

interface Props {
  className?: string;
  size?: number | string;
  color?: string;
}

const IconUpDown = React.memo(
  ({ className = "", size = 20, color = "#006C6E" }: Props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 443 511.62"
      width={size}
      height={size}
      className={className}
    >
      <path
        fill={color}
        fillRule="nonzero"
        d="M152.93 286.97c0 17.1-13.87 30.97-30.97 30.97-17.11 0-30.98-13.87-30.98-30.97v-177.4l-37.45 40.31c-11.63 12.5-31.19 13.2-43.68 1.57-12.49-11.62-13.19-31.18-1.57-43.68L99.33 9.79l2.06-1.94c12.69-11.35 32.2-10.26 43.55 2.43l91.05 101.47c11.35 12.69 10.26 32.2-2.43 43.55-12.68 11.36-32.19 10.27-43.55-2.42l-37.08-41.33v175.42zm236.24 71.77c11.35-12.69 30.86-13.78 43.55-2.43 12.69 11.36 13.78 30.87 2.42 43.56L344.1 501.34c-11.36 12.69-30.87 13.78-43.55 2.42l-2.02-1.97-91.09-97.95c-11.63-12.49-10.93-32.05 1.57-43.67 12.49-11.63 32.05-10.93 43.67 1.57l37.46 40.31V231.53c0-17.11 13.87-30.97 30.97-30.97s30.97 13.86 30.97 30.97v168.54l37.09-41.33z"
      />
    </svg>
  )
);

IconUpDown.displayName = "IconUpDown";

export { IconUpDown };
