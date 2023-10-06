import { SHADOW } from "shared/styles/shadow";
import { TYPOGRAPHY } from "shared/styles/typography";
import styled from "styled-components";

export const Logbook = () => {
  return (
    <section>
      <Root>
        <Title>Бортжурналы</Title>
        Дальше будет контент
      </Root>
    </section>
  );
};

const Root = styled.div`
  margin-left: 20px;
  border-radius: 6px;
  padding: 20px;
  ${SHADOW.defaultBlock};
`;

const Title = styled.h4`
  ${TYPOGRAPHY.mainTitle};
  font-size: 25px;
`;
