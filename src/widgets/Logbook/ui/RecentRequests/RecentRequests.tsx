import { useSelector } from "react-redux";
import { RootState } from "shared/store/rootReducer";
import { TYPOGRAPHY } from "shared/styles/typography";
import styled from "styled-components";
import { RequestItem } from "./lib/RequestItem/RequestItem";

export const RecentRequests = () => {
  const requests = useSelector((state: RootState) => state.requests);

  return (
    <Root>
      <Title>Недавние запросы</Title>
      <RequestList>
        {requests.map((request) => (
          <RequestItem request={request} />
        ))}
      </RequestList>
    </Root>
  );
};

const Root = styled.div`
  margin-top: 20px;
`;

const Title = styled.h4`
  ${TYPOGRAPHY.titleH4};
`;

const RequestList = styled.div`
  margin-top: 10px;

  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;
