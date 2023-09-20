import { IconProps } from "shared/constants/types";
import { COLORS } from "shared/styles/colors";

export const MessageIcon = ({
  width = 26,
  height = 26,
  fillColor = COLORS.fillIcon,
}: IconProps) => {
  return (
    <svg
      fill={fillColor}
      width={`${width}px`}
      height={`${height}px`}
      viewBox="-2 -2.5 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
    >
      <path d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003l-4.347 2.979zM16 10.017a7.136 7.136 0 0 0 0 .369v-.37c.005-.107.006-1.447.004-4.019a3 3 0 0 0-3-2.997H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743v-3.726z" />
    </svg>
  );
};