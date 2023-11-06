import { Button } from "antd";
import { ReactNode } from "react";
import { COLORS } from "shared/styles/colors";
import styled from "styled-components";

type IconButtonProps = {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const IconButton = ({ icon, onClick, className }: IconButtonProps) => {
  return <StyledButton icon={icon} onClick={onClick} className={className} />;
};

const StyledButton = styled(Button)`
  &.ant-btn-default {
    background-color: transparent;
    border: 0;
    padding: 3px;

    &:hover {
      background-color: ${COLORS.button.header.hoverBg};
      & svg {
        fill: ${COLORS.white};
      }
    }
  }
`;
