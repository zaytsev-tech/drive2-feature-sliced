import { useDispatch } from "react-redux";
import { removeRequest } from "shared/store/ducks/request/slice";
import { RequestType } from "shared/store/ducks/request/types";
import { TYPOGRAPHY } from "shared/styles/typography";
import { IconButton } from "shared/ui/Buttons/IconButton/IconButton";
import { CrossIcon } from "shared/ui/icons/CrossIcon";
import styled from "styled-components";

type RequestItemProps = {
  request: RequestType;
};

export const RequestItem = ({ request }: RequestItemProps) => {
  const dispatch = useDispatch();

  const { id, brand, model, theme } = request;

  const onDeleteRequest = (id: string) => {
    dispatch(removeRequest(id));
  };

  return (
    <Root>
      <p>{`${brand} ${model} - ${theme}`} </p>
      <StyledIconButton
        icon={<CrossIcon width={15} height={15} lineWeight={2} />}
        onClick={() => {
          onDeleteRequest(id);
        }}
      />
    </Root>
  );
};

const Root = styled.div`
  ${TYPOGRAPHY.paragraph};

  display: flex;
  align-items: center;
  vartical-align: middle;
`;

const StyledIconButton = styled(IconButton)`
  && {
    display: inline-flex;
    width: fit-content;
    height: fit-content;
  }
`;
