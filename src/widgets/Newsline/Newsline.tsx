import { TYPOGRAPHY } from "shared/styles/typography";
import { BestCarOfDay } from "shared/ui/BestCarOfDay/BestCarOfDay";
import styled from "styled-components";

export const Newsline = () => {
  return (
    <Root>
      <Title>Лента</Title>
      <BestCarOfDay />
    </Root>
  );
};

const Root = styled.div``;

const Title = styled.h3`
  ${TYPOGRAPHY.mainTitle};
`;
