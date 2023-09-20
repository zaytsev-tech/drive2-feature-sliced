import { IconProps } from "shared/constants/types";
import { COLORS } from "shared/styles/colors";
import styled from "styled-components";

export const BurgerIcon = ({
  width = 26,
  height = 26,
  fillColor = COLORS.fillIcon,
}: IconProps) => {
  return (
    <Icon $width={width} $fillColor={fillColor}>
      <div></div>
      <div></div>
      <div></div>
    </Icon>
  );
};

const Icon = styled.div<{
  $width: number;
  $fillColor: string;
}>`
  width: ${({ $width }) => `${$width}px`};

  & div {
    background: ${({ $fillColor }) => $fillColor};
    content: "";
    display: block;
    height: 5px;
    border-radius: 3px;
    margin: 3px 0;
    transition: 0.5s;
  }
`;
