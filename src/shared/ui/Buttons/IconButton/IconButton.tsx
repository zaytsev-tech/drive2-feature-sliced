import { Button } from "antd";
import { ReactNode } from "react";
import { COLORS } from "shared/styles/colors";
import styled from "styled-components";

type IconButtonProps = {
  icon: ReactNode;
  onClick?: () => void;
};

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return <StyledButton icon={icon} onClick={onClick} />;
};

const StyledButton = styled(Button)`
  &.ant-btn-default {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 0;

    &:hover {
      background-color: ${COLORS.button.header.hoverBg};
      & svg {
        fill: ${COLORS.white};
      }
    }
  }
`;
