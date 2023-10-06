import { FC, ReactNode } from "react";
import { ScreenSizesEnum } from "shared/styles/screenSizes";
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
  display: flex;
  justify-content: center;
  max-width: ${ScreenSizesEnum.desktop}px;
`;
