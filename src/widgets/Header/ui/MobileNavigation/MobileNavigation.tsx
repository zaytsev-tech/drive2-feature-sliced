import { BurgerMenu } from "shared/ui/BurgerMenu/BurgerMenu";
import { IconButton } from "shared/ui/Buttons/IconButton/IconButton";
import { CarIcon } from "shared/ui/icons/CarIcon";
import { MessageIcon } from "shared/ui/icons/MessageIcon";
import { NotificationIcon } from "shared/ui/icons/NotificationIcon";
import { SearchIcon } from "shared/ui/icons/SearchIcon";
import styled from "styled-components";

export const MobileNavigation = () => {
  return (
    <Root>
      <IconButton icon={<CarIcon />} />
      <IconButton icon={<MessageIcon />} />
      <IconButton icon={<NotificationIcon />} />
      <IconButton icon={<SearchIcon />} />
      <IconButton icon={<BurgerMenu />} />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
