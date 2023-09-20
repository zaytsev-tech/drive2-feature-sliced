import { Menu, MenuProps } from "antd";
import { ButtonHTMLAttributes, useState } from "react";
import { BurgerIcon } from "shared/ui/icons/BurgerIcon";
import { CrossIcon } from "shared/ui/icons/CrossIcon";
import styled from "styled-components";

type MenuItem = Required<MenuProps>["items"][number];

type MenuButtonProps = {
  isOpenMenu: boolean;
} & ButtonHTMLAttributes<any>;

export const BurgerMenuButton = ({ isOpenMenu, ...props }: MenuButtonProps) => {
  return <Root {...props}>{isOpenMenu ? <CrossIcon /> : <BurgerIcon />}</Root>;
};

const Root = styled.button`
  border: none;
  background: transparent;
`;
