import styled from "styled-components";

export const LeftSidebar = () => {
  return (
    <Root>
      <ul>
        <li>Лента</li>
        <li>Машины</li>
        <li>Бортжурналы</li>
      </ul>
    </Root>
  );
};

const Root = styled.div`
  min-width: 240px;
`;
