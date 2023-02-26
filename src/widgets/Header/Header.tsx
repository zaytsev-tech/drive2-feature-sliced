import Head from "next/head";
import { COLORS } from "shared/styles/colors";
import { Logo } from "shared/ui/Logo/Logo";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderContent>
        <Logo />
      </HeaderContent>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  width: 100vw;
  height: 50px;
  background: ${COLORS.black};
`;

const HeaderContent = styled.div`
  max-width: 1156px;
`;
