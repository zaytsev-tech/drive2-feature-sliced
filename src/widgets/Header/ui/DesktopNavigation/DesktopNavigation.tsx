import { MEDIA_DEVICE_SIZE, SCREEN_SIZE_PX } from "shared/styles/screenSizes";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { IconButton } from "shared/ui/Buttons/IconButton/IconButton";
import { MessageIcon } from "shared/ui/icons/MessageIcon";
import { NotificationIcon } from "shared/ui/icons/NotificationIcon";
import { SettingsIcon } from "shared/ui/icons/SettingsIcon";
import { HeaderInput } from "shared/ui/Inputs/HeaderInput/HeaderInput";
import styled from "styled-components";

export const DesktopNavigation = () => {
  return (
    <Root>
      <LeftHeaderContent>
        <Avatar />
        <HeaderInput />
      </LeftHeaderContent>
      <IconsContainer>
        <IconButton icon={<MessageIcon />} />
        <IconButton icon={<NotificationIcon />} />
        <IconButton icon={<SettingsIcon />} />
      </IconsContainer>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const LeftHeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const IconsContainer = styled.div`
  display: flex;
  position: relative;
  right: 50px;

  & > svg {
    min-width: 50px;
  }

  @media ${MEDIA_DEVICE_SIZE.desktop} {
    right: 0px;
  }
`;
