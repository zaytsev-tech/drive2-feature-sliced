import { Input, InputProps } from "antd";
import { COLORS } from "shared/styles/colors";
import { SearchIcon } from "shared/ui/icons/SearchIcon";
import styled from "styled-components";

export const HeaderInput = (props: InputProps) => {
  return (
    <StyledInput
      {...props}
      placeholder="Поиск"
      prefix={<SearchIcon width={16} height={16} />}
    />
  );
};

const StyledInput = styled(Input)`
  max-width: 355px;
  height: 30px;
  border: 0;
  border-radius: 99px;
  padding: 5px 5px 5px 10px;
  background-color: ${COLORS.inputs.searchBg};

  & .ant-input {
    background-color: ${COLORS.inputs.searchBg};
    color: ${COLORS.white};

    &::placeholder {
      color: ${COLORS.fillIcon};
    }
  }
`;
