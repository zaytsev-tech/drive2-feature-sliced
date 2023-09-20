import { IconProps } from "shared/constants/types";
import { COLORS } from "shared/styles/colors";
import styled from "styled-components";

export const CrossIcon = ({
  width = 26,
  height = 26,
  fillColor = COLORS.fillIcon,
}: IconProps) => {
  return (
    <Icon $width={width} $fillColor={fillColor}>
      <div></div>
      <div></div>
    </Icon>
  );
};

const Icon = styled.div<{ $width: number; $fillColor: string }>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $width }) => `${$width}px`};
  position: relative;

  div {
    background: ${({ $fillColor }) => $fillColor};
    position: absolute;
    left: ${({ $width }) => `${$width / 2}px`};
    content: " ";
    height: ${({ $width }) => `${$width}px`};
    width: 4px;
    border-radius: 3px;
  }

  div:first-child {
    transform: rotate(45deg);
  }

  div:last-child {
    transform: rotate(-45deg);
  }
`;
