import Head from "next/head";
import { useCheckOnMobileScreen } from "shared/hooks/useCheckOnMobileScreen";
import { COLORS } from "shared/styles/colors";
import { SCREEN_SIZE_PX } from "shared/styles/screenSizes";
import { STYLE_CONSTANTS } from "shared/styles/style-constants";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { BurgerMenu } from "shared/ui/BurgerMenu/BurgerMenu";
import { IconButton } from "shared/ui/Buttons/IconButton/IconButton";
import { CarIcon } from "shared/ui/icons/CarIcon";
import { MessageIcon } from "shared/ui/icons/MessageIcon";
import { NotificationIcon } from "shared/ui/icons/NotificationIcon";
import { SearchIcon } from "shared/ui/icons/SearchIcon";
import { SettingsIcon } from "shared/ui/icons/SettingsIcon";
import { HeaderInput } from "shared/ui/Inputs/HeaderInput/HeaderInput";
import { Logo } from "shared/ui/Logo/Logo";
import styled from "styled-components";
import { DesktopNavigation } from "./ui/DesktopNavigation/DesktopNavigation";
import { MobileNavigation } from "./ui/MobileNavigation/MobileNavigation";

export const Header = () => {
  const { isMobileScreen } = useCheckOnMobileScreen();

  return (
    <HeaderBlock>
      <HeaderContent>
        <Logo />
        {isMobileScreen ? <MobileNavigation /> : <DesktopNavigation />}
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
  display: flex;
  position: relative;
  align-items: center;

  margin: 0 auto;
  max-width: ${SCREEN_SIZE_PX.desktop}px;
`;
