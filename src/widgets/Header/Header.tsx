import Head from "next/head";
import { COLORS } from "shared/styles/colors";
import { STYLE_CONSTANTS } from "shared/styles/style-constants";
import { BurgerMenu } from "shared/ui/BurgerMenu/BurgerMenu";
import { CarIcon } from "shared/ui/icons/CarIcon";
import { MessageIcon } from "shared/ui/icons/MessageIcon";
import { NotificationIcon } from "shared/ui/icons/NotificationIcon";
import { SearchIcon } from "shared/ui/icons/SearchIcon";
import { Logo } from "shared/ui/Logo/Logo";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderContent>
        <Logo />
        <Navigation>
          <CarIcon />
          <MessageIcon />
          <NotificationIcon />
          <SearchIcon />
          <BurgerMenu />
        </Navigation>
      </HeaderContent>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  width: 100vw;
  height: ${`${STYLE_CONSTANTS.headerHeight}px`};
  background: ${COLORS.black};
`;

const HeaderContent = styled.div`
  max-width: 1156px;
  display: flex;
  position: relative;
  align-items: center;
`;

const Navigation = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
