import { FC, ReactNode } from "react";
import { SCREEN_SIZE_PX } from "shared/styles/screenSizes";
import styled from "styled-components";
import { Header } from "widgets/Header/Header";
import { LeftSidebar } from "widgets/Sidebars/LeftSidebar/LeftSidebar";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Root>
        <section>
          <LeftSidebar />
        </section>
        <main>{children}</main>
      </Root>
    </>
  );
};

const Root = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: center;
  max-width: ${SCREEN_SIZE_PX.desktop}px;
`;
