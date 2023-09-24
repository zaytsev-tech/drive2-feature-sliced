import styled from "styled-components";
import Image from "next/image";
import avatarImage from "shared/assets/images/successful-handsome-man-by-the-car.jpg";

export const Avatar = () => {
  return <StyledImage src={avatarImage} alt="avatar" width={30} height={30} />;
};

const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  padding: 10px 15px;
`;
