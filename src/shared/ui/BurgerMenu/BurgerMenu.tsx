import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { COLORS } from "shared/styles/colors";
import { STYLE_CONSTANTS } from "shared/styles/style-constants";
import { BurgerIcon } from "shared/ui/icons/BurgerIcon";
import styled from "styled-components";
import { BurgerMenuButton } from "../Buttons/BurgerMenuButton/BurgerMenuButton";

type MenuItem = Required<MenuProps>["items"][number];

export const BurgerMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: "Option 1",
      key: "setting:1",
    },
    {
      label: "Option 2",
      key: "setting:2",
    },
  ] as MenuItem[];

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <BurgerMenuButton isOpenMenu={isOpenMenu} onClick={handleOpenMenu} />
      {isOpenMenu && <BlockMenu>test</BlockMenu>}
    </>
  );
};

export const BlockMenu = styled.div`
  background: ${COLORS.black};
  width: 100%;
  height: 500px;
  position: absolute;
  top: ${`${STYLE_CONSTANTS.headerHeight}px`};
  left: 0;
`;
