import { GroupBase, StylesConfig } from "react-select";
import { OptionValue } from "shared/types/types";

export const SELECT_STYLES: StylesConfig<
  OptionValue,
  false,
  GroupBase<OptionValue>
> = {
  control: (baseStyles) => ({
    ...baseStyles,
    maxHeight: 30,
    minHeight: "none",
    alignItems: "baseline",
    fontFamily: "Arial",
    fontWeight: 300,
    fontSize: 15,
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: "0px",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: "0px",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
};
