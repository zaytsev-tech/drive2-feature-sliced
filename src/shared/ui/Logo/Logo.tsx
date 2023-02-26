import Link from "next/link";
import { COLORS } from "shared/styles/colors";
import { TYPOGRAPHY } from "shared/styles/typography";
import styled from "styled-components";

export const Logo = () => {
  return (
    <StyledLink href="/">
      <LogoContainer>DRIVE2.RU</LogoContainer>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  ${TYPOGRAPHY.logoTitle};
  text-decoration: none;
  text-transform: uppercase;
`;

const LogoContainer = styled.span`
  display: flex;
  width: 120px;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};
  background: ${COLORS.mainRed};
`;
