import { IconProps } from "shared/constants/types";
import { COLORS } from "shared/styles/colors";

export const NotificationIcon = ({
  width = 26,
  height = 26,
  fillColor = COLORS.fillIcon,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 24 24"
    >
      <path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.5-6v-5.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};
