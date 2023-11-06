import { IconProps } from "shared/types/types";
import { COLORS } from "shared/styles/colors";

export const SearchIcon = ({
  width = 26,
  height = 26,
  fillColor = COLORS.fillIcon,
}: IconProps) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 -0.5 21 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-219.000000, -280.000000)"
          fill={fillColor}
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M184,138.586 L182.5153,140 L176.57545,134.343 L178.06015,132.929 L184,138.586 Z M170.35,132 C167.45515,132 165.1,129.757 165.1,127 C165.1,124.243 167.45515,122 170.35,122 C173.24485,122 175.6,124.243 175.6,127 C175.6,129.757 173.24485,132 170.35,132 L170.35,132 Z M170.35,120 C166.2907,120 163,123.134 163,127 C163,130.866 166.2907,134 170.35,134 C174.4093,134 177.7,130.866 177.7,127 C177.7,123.134 174.4093,120 170.35,120 L170.35,120 Z"
              id="search_left-[#1506]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
