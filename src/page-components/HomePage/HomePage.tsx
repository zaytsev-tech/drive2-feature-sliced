import { Logo } from "shared/ui/Logo/Logo";
import styled from "styled-components";
import { MainLayout } from "widgets/Layouts/MainLayout/MainLayout";
import { Logbook } from "widgets/Logbook/Logbook";
import { Newsline } from "widgets/Newsline/Newsline";

export const HomePage = () => {
  return (
    <MainLayout>
      <HomepageContainer>
        <Newsline />
        <Logbook />
      </HomepageContainer>
    </MainLayout>
  );
};

const HomepageContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
