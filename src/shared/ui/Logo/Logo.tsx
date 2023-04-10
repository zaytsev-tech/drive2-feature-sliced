import Link from "next/link";
import { useCheckScreenSize } from "shared/hooks/useCheckScreenSize";
import { COLORS } from "shared/styles/colors";
import { ScreenSizesEnum } from "shared/styles/screenSizes";
import { TYPOGRAPHY } from "shared/styles/typography";
import styled from "styled-components";

export const Logo = () => {
  const { screenSize } = useCheckScreenSize();

  return (
    <StyledLink href="/">
      {screenSize <= ScreenSizesEnum.desktop ? (
        <MobileLogoContainer>D</MobileLogoContainer>
      ) : (
        <LogoContainer>DRIVE2.RU</LogoContainer>
      )}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  ${TYPOGRAPHY.logoTitle};
  text-decoration: none;
  text-transform: uppercase;
`;

const MobileLogoContainer = styled.span`
  display: flex;
  min-width: 62px;
  max-width: 120px;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};
  background: ${COLORS.mainRed};
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
