import Select, { Props } from "react-select";
import StateManagedSelect from "react-select/dist/declarations/src/stateManager";
import { STYLE_CONSTANTS } from "shared/styles/style-constants";
import { OptionValue } from "shared/types/types";
import styled from "styled-components";
import { SELECT_STYLES } from "./lib/select-styles";

type DefaultSelectProps = {
  options: OptionValue[];
  className?: string;
} & Props<any>;

export const DefaultSelect = ({
  options,
  className,
  ...props
}: DefaultSelectProps) => {
  return (
    <Select
      {...props}
      className={className}
      options={options}
      styles={SELECT_STYLES}
    />
  );
};
