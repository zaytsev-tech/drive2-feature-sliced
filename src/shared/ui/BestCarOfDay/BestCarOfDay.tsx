import Image from "next/image";
import styled from "styled-components";
import { CarOfTheDayIcon } from "../icons/CarOfTheDayIcon";

export const BestCarOfDay = () => {
  return (
    <Root>
      <StyledImage
        src="https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3269&q=80"
        fill={true}
        priority={true}
        alt="Best car of the day"
      />
      <div style={{ height: "30px", display: "inline-block" }}>
        <StyledCarOfTheDayIcon />
      </div>
    </Root>
  );
};

const Root = styled.div`
  width: 640px;
  height: 360px;
  overflow: hidden;

  position: relative;

  border-radius: 6px;
  margin-top: 20px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledCarOfTheDayIcon = styled(CarOfTheDayIcon)`
  position: absolute;
  width: 128px;
  height: 128px;
  right: 10px;
  top: 10px;
`;
