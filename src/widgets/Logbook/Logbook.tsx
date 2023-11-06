import { SHADOW } from "shared/styles/shadow";
import { TYPOGRAPHY } from "shared/styles/typography";
import styled from "styled-components";
import { LogbookFilters } from "./ui/LogbookFilters/LogbookFilters";
import { RecentRequests } from "./ui/RecentRequests/RecentRequests";

export const Logbook = () => {
  return (
    <section>
      <Root>
        <Title>Бортжурналы</Title>
        <LogbookFilters />
        <RecentRequests />
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

const Title = styled.h3`
  ${TYPOGRAPHY.titleH3};

  margin-bottom: 20px;
`;
