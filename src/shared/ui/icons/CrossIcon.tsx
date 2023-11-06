import { IconProps } from "shared/types/types";
import { COLORS } from "shared/styles/colors";
import styled from "styled-components";

export const CrossIcon = ({
  width = 26,
  height = 26,
  lineWeight = 4,
  fillColor = COLORS.fillIcon,
}: IconProps) => {
  return (
    <Icon $width={width} $fillColor={fillColor} $lineWeight={lineWeight}>
      <div></div>
      <div></div>
    </Icon>
  );
};

const Icon = styled.div<{
  $width: number;
  $fillColor: string;
  $lineWeight: number;
}>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $width }) => `${$width}px`};
  position: relative;

  div {
    background: ${({ $fillColor }) => $fillColor};
    position: absolute;
    left: ${({ $width, $lineWeight }) => `${$width / 2 - $lineWeight / 2}px`};
    content: " ";
    height: ${({ $width }) => `${$width}px`};
    width: ${({ $lineWeight }) => `${$lineWeight}px`};
    border-radius: ${({ $lineWeight }) => `${$lineWeight - 1}px`};
  }

  div:first-child {
    transform: rotate(45deg);
  }

  div:last-child {
    transform: rotate(-45deg);
  }
`;
